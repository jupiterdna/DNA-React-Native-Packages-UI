import React from 'react';
import {Text, View, useColorScheme} from 'react-native';
import TextFieldScreen from './src/Screens/TextFieldScreen';
import Testscreen from './src/Screens/Testscreen';
import RippleScreen from './src/Screens/RippleScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useColor} from '@rndna/theme-provider';
import RadioButtonScreen from './src/Screens/RadioButtonScreen';

const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Ripple Button" component={RippleScreen} />
        <Drawer.Screen name="Textfields" component={TextFieldScreen} />
        <Drawer.Screen name="Radio Button" component={RadioButtonScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
