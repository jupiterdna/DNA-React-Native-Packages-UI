/* eslint-disable react-native/no-inline-styles */
import {View, useColorScheme} from 'react-native';
import React from 'react';
import {DNAButton} from '@rndna/button';
import {DollarCircleIcon} from '@rndna/icon';

const RippleScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: useColorScheme() === 'light' ? 'white' : '#2c2c2c',
        paddingVertical: 60,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DNAButton
        icon={DollarCircleIcon}
        label="Ripple Button"
        onPress={() => {
          console.log('onPress');
        }}
      />
    </View>
  );
};

export default RippleScreen;
