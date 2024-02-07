import {View, useColorScheme, Text} from 'react-native';
import React, {useState} from 'react';
import TextField from './Component/TextField';
import {UserAddIcon} from '@rndna/icon';
import RadioGroup from './controls/RadioGroup/RadioGroup';
import {DNAText} from '@rndna/text';
import {DNARadioButton, DNARadioButtonProps} from '@rndna/radiobutton';

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

const AnimatedScreen = () => {
  const [value, setValue] = useState(undefined);

  const [selected, setSelected] = useState<(typeof option)[0] | undefined>(
    undefined,
  );

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

      <RadioGroup
        orientation="horizontal"
        label="Radio Group"
        disabled
        required>
        {option.map(op => {
          const active = selected?.id === op.id;
          return (
            <DNARadioButton
              key={op.id}
              checked={active}
              onPress={() => {
                setSelected(op);
              }}
              {...op}
            />
          );
        })}
      </RadioGroup>
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
