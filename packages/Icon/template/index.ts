import { promises as fs } from "fs";
import junk from 'junk'
import camelcase from 'camelcase'
import generateComponent from "../scripts/build";


type templateTypes = {
  imports?: any;
  interfaces?: any;
  componentName: any;
  props?: any;
  exports?: any;
  jsx?: any;
};

const heading = `//generated file`;

const resetSrcDir = async () => {
    try {
      await fs.rm(`./generated`, { recursive: true })
    } catch (error) {
      // Allowed to fail
      console.error(`Cannot find directories to remove. `, error)
    }
    try {
      await fs.mkdir(`./generated`)
      await fs.mkdir(`./generated/solid`)
      await fs.mkdir(`./generated/outline`)
    } catch (error) {
      throw new Error('Failed wiping src folders')
    }
  }
  

export const ntemplate = (variables: any, { tpl }: any) => {
    return tpl`
  ${variables.imports};


  ${variables.interfaces};

  interface Props extends SvgProps {
    size?: NumberProp;
  }
  

  const ${variables.componentName} = (${variables.props}) => (
    ${variables.jsx}
  );
  
  ${variables.exports};
  `
  }

  

const getIcons = async (projectName: string, typePath:'solid' | 'outline') => {
  const iconDir = `./svg-icons/${projectName}`;
  console.log("reading")
  let files = await fs.readdir(`${iconDir}/${typePath}/`);

  return Promise.all(
    files.filter(junk.not).map(async (file) => ({
      svg: await fs.readFile(`${iconDir}/${typePath}/${file}`),
      componentName: `${camelcase(file.replace(/\.svg$/, ""), {
        pascalCase: true,
      })}Icon`,
    }))
  );
};

const exportIcons = async (
    projectName: string,
    style: 'solid'  | 'outline'
  ) => {
    const icons = await getIcons(projectName, style='solid')
    for (let { componentName, svg } of icons) {

        const svgString = svg?.toString();
        const jsx = await generateComponent('native', style, componentName, svgString)
        await fs.writeFile(
            `./generated/${style}/${componentName}.tsx`,
            heading + '\n' + jsx
        )
        const exportStr = `export { default as ${componentName} } from './${componentName}';\n`
        await fs.writeFile(`./generated/${style}/index.ts`, exportStr, {
            flag: 'a'
        })
    }
  }


async function generateAllIcons () {
    await resetSrcDir()
    await exportIcons('gorentals', 'solid');
}

generateAllIcons()


// export { template };
