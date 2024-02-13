import 'react-native-svg';
import React from 'react';
import {useColorScheme, View, Text} from 'react-native';
import {
  ThemeProvider,
  configType,
  darkmodeColor,
  themeConfig,
} from '@rndna/theme-provider';
// import AnimatedScreen from './src/Screens/AnimatedScreen';
import {UserAddIcon} from '@rndna/icon';

const Native = () => {
  // return (
  //   <View style={{backgroundColor: 'red', flex: 1}}>
  //     <Text>sdfsdf</Text>
  //   </View>
  // );
  const rnConfig: configType =
    useColorScheme() === 'light'
      ? {
          ...themeConfig,
          fonts: {...themeConfig.fonts, fontFamily: 'Roboto'},
        }
      : {
          ...themeConfig,
          colors: darkmodeColor,
          fonts: {...themeConfig.fonts, fontFamily: 'Roboto'},
        };

  return (
    <ThemeProvider config={rnConfig}>
      <>
        {/* <AnimatedScreen /> */}
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'red'}}>123123asd</Text>
          {/* <DNAButton label="eee" color="danger" /> */}
          <UserAddIcon size={30} />
        </View>
      </>
    </ThemeProvider>
  );
};

export default Native;
