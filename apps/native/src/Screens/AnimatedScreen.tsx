import {View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import TextField from './Component/TextField';
import {UserAddIcon} from '@rndna/icon';

const AnimatedScreen = () => {
  const [value, setValue] = useState('123');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: useColorScheme() === 'light' ? 'white' : '#2c2c2c',
        paddingVertical: 60,
        paddingHorizontal: 20,
      }}>
      <TextField
        icon={UserAddIcon}
        variant="filled"
        prefix="Dr"
        placeholder="Label"
        value={value}
        onChange={e => {
          setValue(e);
        }}
        // assistiveText={{
        //   type: 'error',
        //   message: 'This error!',
        // }}
        clearable
      />

      <TextField
        icon={UserAddIcon}
        variant="outlined"
        placeholder="Label"
        value={'123!'}
        onChange={e => {
          setValue(e);
        }}
        // assistiveText={{
        //   type: 'error',
        //   message: 'This error!',
        // }}
        clearable
      />

      <TextField
        // icon={UserAddIcon}
        variant="flat"
        placeholder="Flat TextField"
        value={'123!'}
        onChange={e => {
          setValue(e);
        }}
        // assistiveText={{
        //   type: 'error',
        //   message: 'This error!',
        // }}
        clearable
      />
      {/* <TextField
        icon={UserAddIcon}
        placeholder="Label"
        required
        value={value}
        onChange={e => {
          setValue(e);
        }}
        assistiveText={{
          type: 'error',
          message: 'This error!',
          icon: WarningIcon,
        }}
        onBlur={() => {
          console.log('blurred');
        }}
        clearable
      /> */}
    </View>
  );
};

export default AnimatedScreen;
