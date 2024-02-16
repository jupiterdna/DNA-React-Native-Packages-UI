import React, {useEffect} from 'react';
import TextFieldScreen from './src/Screens/TextFieldScreen';
import RippleScreen from './src/Screens/RippleScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RadioButtonScreen from './src/Screens/RadioButtonScreen';
import DropdownScreen from './src/Screens/DropdownScreen';
import CheckboxGroupScreen from './src/Screens/CheckboxGroupScreen';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Buttons" component={RippleScreen} />
        <Drawer.Screen name="Textfields" component={TextFieldScreen} />
        <Drawer.Screen name="Radio Button" component={RadioButtonScreen} />
        <Drawer.Screen name="Menu" component={DropdownScreen} />
        <Drawer.Screen name="Checkbox Group" component={CheckboxGroupScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
