import { promises as fs } from "fs";
import junk from 'junk'
import camelcase from 'camelcase'
import generateComponent from "../scripts/build";

export const template = (
  { template }: any,
  _opts: any,
  { imports: _imports, componentName, props: _props, jsx, exports }: any
) => {

  const tsTemplate = template.smart({ plugins: ['typescript'] })

  return tsTemplate.ast`
      import * as React from "react";
      import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";

      interface Props extends SvgProps {
        size?: NumberProp;
      }

      const wrapper= (props: Props) => {
          return ${jsx}
      }

      const ${componentName} = ({ size = 24, ...iprops }: Props) => {

        const newProps = {...iprops, width: size, height: size}

        return (
          wrapper(newProps)
        )
      };

      ${exports}
    `
}

const heading = `//this is auto-generated files please do not edit!`;

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
      await fs.mkdir(`./generated/icons`)
      await fs.mkdir(`./generated/outline`)
    } catch (error) {
      throw new Error('Failed wiping src folders')
    }
  }

const getIcons = async (projectName: string, typePath:'solid' | 'outline') => {
  const iconDir = `./svg-icons/${projectName}`;
  console.log("generating icons please wait...")
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
    const icons = await getIcons(projectName, style)
    for (let { componentName, svg } of icons) {

        const Cname = style === 'solid' ? componentName : `${componentName}Outline`

        const svgString = svg?.toString();
        const jsx = await generateComponent('native', style, Cname, svgString)
        await fs.writeFile(
            `./generated/icons/${Cname}.tsx`,
            heading + '\n' + jsx
        )
        const exportStr = `export { default as ${Cname} } from './${Cname}';\n`
        await fs.writeFile(`./generated/icons/index.ts`, exportStr, {
            flag: 'a'
        })
    }
  }

async function generateAllIcons () {
    try {
      await resetSrcDir()
      await exportIcons('gorentals', 'solid');
      await exportIcons('gorentals', 'outline');
    } catch (error) {
      throw new Error('Failed in generating icons')
    }
}

generateAllIcons()
