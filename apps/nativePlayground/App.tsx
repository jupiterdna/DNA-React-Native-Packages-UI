import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
import CustomDrawerContent from './src/components/Header';
import {
  BadgeScreen,
  CheckboxGroupScreen,
  ChipScreen,
  DropdownScreen,
  IconScreen,
  RadioButtonScreen,
  RippleScreen,
  TextFieldScreen,
} from './src/Screens';

const App = () => {
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="Badge" component={BadgeScreen} />
        <Drawer.Screen name="Buttons" component={RippleScreen} />
        <Drawer.Screen name="Checkbox Group" component={CheckboxGroupScreen} />
        <Drawer.Screen name="Chips" component={ChipScreen} />
        <Drawer.Screen name="Icon" component={IconScreen} />
        <Drawer.Screen name="Menu" component={DropdownScreen} />
        <Drawer.Screen name="Radio Button" component={RadioButtonScreen} />
        <Drawer.Screen name="Textfields" component={TextFieldScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
