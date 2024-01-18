#! /usr/bin/env node
const fs = require('fs-extra');
const {promises} = require('fs')

let sourceDir = __dirname+'/assets';
let destDir = './assets';

const removeFiles = async () =>{
    try {
        await promises.rm(`./assets`, { recursive: true })
        await promises.rm(`./react-native.config.js`)
      } catch (error) {
        // Allowed to fail
        // console.error(`Cannot find directories to remove. `, error)
      }     
}

 const genConfig = async () => {
    await promises.writeFile(`react-native.config.js`,
`module.exports = {
    project: {
        ios: {},
        android: {},
    },
    assets: ['./assets/fonts'],
};`
    )
 }

 const writeFiles = () => {
    fs.mkdirSync(destDir);
    console.log("genereting config and font files...")
    try {
        fs.copySync(sourceDir, destDir, { recursive: true })
        console.log('successfully generated rndna fonts and config')
      } catch (err) {
        console.error(err)
      }

      try {
        // removeFiles()
        genConfig()
    
      } catch (error) {
        console.error(err)
      }
 }


if (!fs.existsSync(destDir)){
    writeFiles()
}else{
    removeFiles().then(res=> {
        writeFiles()
    })

}