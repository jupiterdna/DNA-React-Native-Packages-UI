import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {DNAButton} from '@rndna/button';
import {DollarCircleIcon} from '@rndna/icon';

const RippleScreen = () => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: useColorScheme() === 'light' ? 'white' : '#2c2c2c'},
      ]}>
      <View style={styles.gap}>
        <Text>Basic Button with ripple effect</Text>
        <DNAButton
          icon={DollarCircleIcon}
          label="Ripple Button"
          onPress={() => {
            console.log('onPress');
          }}
        />
        <View style={{marginTop: 10}} />
        <Text>Disabled ripple effect</Text>
        <DNAButton
          enableRipple={false}
          icon={DollarCircleIcon}
          label="Ripple Button"
          onPress={() => {
            console.log('onPress');
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  gap: {
    gap: 8,
    alignItems: 'flex-start',
  },
});

export default RippleScreen;
