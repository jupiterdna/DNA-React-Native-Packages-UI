
import files, { promises as fs } from 'fs'
//@ts-ignore
import transform from '@svgr/core'
import junk from 'junk'
import {template} from '../template'

type IconStyle = 'solid' | 'outline'

export const generateComponent = async (
    format = 'native',
    style: IconStyle,
    componentName: string,
    svg: string
  ) => {
      if (format === 'native' && style === 'solid') {
        try {
          //@ts-ignore
          return await transform(
            svg,
            {
              template: template,
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
                viewBox: '0 0 24 24',
              },
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
      else if (format === 'native' && style === 'outline') {
        try {
          //@ts-ignore
          return await transform(
            svg,
            {
              template: template,
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
                viewBox: '0 0 24 24',
              },
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

  export default generateComponent;
