import React from 'react';
import TextFieldScreen from './src/Screens/TextFieldScreen';
import RippleScreen from './src/Screens/RippleScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
