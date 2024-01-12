
import files, { promises as fs } from 'fs'
import { transform } from '@svgr/core'
import junk from 'junk'
import {ntemplate} from '../template'

type IconStyle = 'solid' | 'outline'
type Format = 'web' | 'native'

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>
`

export const generateComponent = async (
    format = 'native',
    style: IconStyle,
    componentName: string,
    svg: string
  ) => {
    if (format === 'native' && style === 'solid') {
        try {
          return await transform(
            svg,
            {
              template: ntemplate,
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    removeAttrs: {
                      attrs: 'path:fill'
                    }
                  },
                  { sortAttrs: true },
                  { removeXMLNS: true }
                ],
              },
              ref: false,
              native: true,
              svgProps: {
                fill: 'currentColor',
                viewBox: '0 0 24 24'
              },
              exportType: 'named',
              plugins: [
                '@svgr/plugin-svgo',
                '@svgr/plugin-jsx',
                '@svgr/plugin-prettier'
              ]
            },
            { componentName }
          )
        } catch (error) {
          throw new Error('Failed generating components')
        }
      }
  }

  const getIcons = async (projectName: string, style: IconStyle) => {
    const iconDir = `../svg-icons/${projectName}`
  
    const stylePath = {
      outline: 'outline',
      solid: 'solid'
    }[style]
  
    let files = await fs.readdir(`${iconDir}/${stylePath}`)
    return Promise.all(
      files.filter(junk.not).map(async file => ({
        svg: await fs.readFile(`${iconDir}/${stylePath}/${file}`),
        // @ts-ignore
        componentName: `${camelcase(file.replace(/\.svg$/, ''), {
          pascalCase: true
        })}Icon`
      }))
    )
  }

  export default generateComponent;
