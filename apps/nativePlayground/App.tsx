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
  FloatingActionButtonScreen,
  IconScreen,
  ImageScreen,
  RadioButtonScreen,
  RippleScreen,
  TextFieldScreen,
  AvatarScreen,
  TextScreen,
} from './src/Screens';
import HookScreen from './src/Screens/HookScreen';
import SwitchScreen from './src/Screens/SwitchScreen';
import ControlTestScreen from './src/Screens/CollapsableScreen';

const App = () => {
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  //return <FloatingActionButtonScreen />;

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="TEst Screen" component={ControlTestScreen} />
        <Drawer.Screen name="HookScreen" component={HookScreen} />
        <Drawer.Screen name="Avatar" component={AvatarScreen} />
        <Drawer.Screen name="Badge" component={BadgeScreen} />
        <Drawer.Screen name="Buttons" component={RippleScreen} />
        <Drawer.Screen name="Checkbox" component={CheckboxGroupScreen} />
        <Drawer.Screen name="Chips" component={ChipScreen} />
        <Drawer.Screen
          name="Floating Action Button (FAB)"
          component={FloatingActionButtonScreen}
        />
        <Drawer.Screen name="Icon" component={IconScreen} />
        <Drawer.Screen name="Image" component={ImageScreen} />
        <Drawer.Screen name="Menu" component={DropdownScreen} />
        <Drawer.Screen name="Radio Button" component={RadioButtonScreen} />
        <Drawer.Screen name="Switch" component={SwitchScreen} />
        <Drawer.Screen name="Text" component={TextScreen} />
        <Drawer.Screen name="Textfields" component={TextFieldScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
