import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {DNAButton} from '@rndna/button';
import {DNAIconButton} from '@rndna/icon_button';
import {UploadCloudIconOutline} from '@rndna/icon';

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
          icon={UploadCloudIconOutline}
          label="Ripple Button"
          onPress={() => {
            console.log('onPress 1');
          }}
        />
        <View style={{marginTop: 10}} />
        <Text>Basic Button without ripple effect</Text>
        <DNAButton
          enableRipple={false}
          icon={UploadCloudIconOutline}
          label="Ripple Button"
          onPress={() => {
            console.log('onPress 2');
          }}
        />
        <View style={{marginTop: 10}} />
        <Text>Icon Button with ripple effect</Text>
        <DNAIconButton
          icon={UploadCloudIconOutline}
          onPress={() => {
            console.log('onPress 3');
          }}
        />
        <View style={{marginTop: 10}} />
        <Text>Icon Button without ripple effect</Text>
        <DNAIconButton
          enableRipple={false}
          icon={UploadCloudIconOutline}
          onPress={() => {
            console.log('onPress 4');
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
