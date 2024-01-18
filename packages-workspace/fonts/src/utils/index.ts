import { union_data } from "./func"
import fs from 'fs'
import path from 'path'

// const fs = require('fs-extra');
export type getFontType = {
    fullname: string
    short_name: string
    weight: string
}

const filePath= path.join(__dirname, '..', '..', 'assets/fonts');

const getFonts = (path: string): getFontType[] => {
    const fonts: string[] = fs.readdirSync(path, {withFileTypes: true})
        .filter((item: unknown | any) => !item.isDirectory())
        .map((item:unknown | any) => item?.name?.split(".")[0])

    return fonts.map((font: string) => {
        const splited = font ? font?.split("-") : ["", ""]

        return {
            fullname: font,
            short_name: splited[0],
            weight: splited[1],
        }
    })
  };

  const writeJson = async (arr: getFontType[]) => {
    await fs.promises.writeFile(`./src/rndna-font.json`,
    JSON.stringify(arr))
}  
  
const generateTypes = async () => {
    try {
        const fonts: getFontType[] = getFonts(filePath)

    if(fonts.length) {
        writeJson(fonts)
        const font_data = union_data(fonts);
        const concatFonts = font_data.reduce((acc: string, cur: string)=> {
            return !!acc ? `${acc} | "${cur}"` : `"${cur}"`
        }, ``)

        await fs.promises.writeFile(`./src/types.ts`,
        `export type fontNameType = ${concatFonts}

export type fontWeightType = 'bold' | 'normal' | 'semibold'  | 'light' | 'thin' | 'black' 
        
export type fontStyleType = 'italic' | 'normal'`)
    }

    } catch (error) {
        console.log(error)
    } 
}

try {
    generateTypes()
} catch (error) {
    console.log(error)
}