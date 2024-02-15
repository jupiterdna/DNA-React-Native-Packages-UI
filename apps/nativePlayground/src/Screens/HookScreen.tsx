import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {DNATextField} from '@rndna/textfield';
import {UserAddIcon, WarningIcon} from '@rndna/icon';

const HookScreen = () => {
  const [val, setVal] = useState('');
  const [val2, setVal2] = useState('');

  return (
    <View>
      <Text>HookScreen</Text>
      <DNATextField
        value={val}
        onChangeText={tx => {
          setVal(tx);
        }}
        prefix="Dr"
      />

      <DNATextField
        icon={UserAddIcon}
        variant="filled"
        prefix="Dr"
        placeholder="Label"
        value={val2}
        onChange={e => {
          setVal2(e);
        }}
        // assistiveText={{
        //   type: 'error',
        //   message: 'This error!',
        // }}
        clearable
      />
    </View>
  );
};

export default HookScreen;
