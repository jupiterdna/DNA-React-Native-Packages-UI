import {View, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {UserAddIcon, WarningIcon} from '@rndna/icon';
import {DNATextField} from '@rndna/textfield';
import {
  DNARadioButton,
  DNARadioButtonProps,
  DNARadioGroup,
} from '@rndna/radiobutton';

const option: DNARadioButtonProps[] = [
  {
    id: 'test',
    label: 'tests',
  },
  {
    id: 'test2',
    label: 'tests2',
    checked: true,
  },
];

const TextFieldScreen = () => {
  const [value, setValue] = useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: useColorScheme() === 'light' ? 'white' : '#2c2c2c',
        paddingVertical: 60,
        paddingHorizontal: 20,
      }}>
      <DNATextField
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

      {/* <DNATextField
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

      <DNATextField
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

      <DNATextField
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

export default TextFieldScreen;
