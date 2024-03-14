
# DNA React Native Font Usage

To use DNA React Native Font in your project, follow these steps:

1. For fresh installation you must run this following commands
   ```bash
   yarn add @rndna/font
2. run this command to generate config file **react-native.config.js** and all font assets (**Lato, OpenSans, Roboto**) and **types** on your project
   ```bash
    #for development instance, you can use the command to install config and fonts locally
   npm i -g 
    #then run this after 
   npx rndna-font-init
   #to link all assets to ios and android
   npx react-native-assets
3. Basic Usage to use the font package
```js
import { View, Text } from 'react-native'
import React from 'react'
import {Font} from '@rndna/font';

const Component = () => {
  return (
      <Text 
        style={{
            Font('Lato', 'Normal')
            //your other styles...
        }}
      >
        Hello World
      </Text>
  )
}
export default Component
```
4. If your project is already wrapped by DNA React theme-provider context **@rndna/theme-provider**, use the code below:
```js
import { View, Text } from 'react-native'
import React from 'react'
import {useFont} from '@rndna/theme-provider';
import {Font} from '@rndna/font';

const Component = () => {
    //hooks to get the font in context
  const themeFont = useFont();
  return (
    <View>
      <Text 
        style={{
            Font(themeFont.fontFamily, 'bold', 'italic')
            //your other styles...
        }}
      >
        Hello World
      </Text>
    </View>
  )
}
export default Component
```

