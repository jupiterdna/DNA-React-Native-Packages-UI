import React from 'react';
import {Text, View, useColorScheme} from 'react-native';
import TextFieldScreen from './src/Screens/TextFieldScreen';
import Testscreen from './src/Screens/Testscreen';
import RippleScreen from './src/Screens/RippleScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useColor} from '@rndna/theme-provider';
import HookScreen from './src/Screens/HookScreen';

const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Ripple Button" component={RippleScreen} />
        <Drawer.Screen name="Textfields" component={TextFieldScreen} />
        <Drawer.Screen name="HookScreen" component={HookScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
