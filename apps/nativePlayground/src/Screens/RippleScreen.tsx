import {StyleSheet, View, useColorScheme} from 'react-native';
import React from 'react';
import {DNAButton} from '@rndna/button';
import {UploadCloudIconOutline} from '@rndna/icon';
import {DNAText} from '@rndna/text';

const RippleScreen = () => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: useColorScheme() === 'light' ? 'white' : '#2c2c2c'},
      ]}>
      <View style={styles.gap}>
        <DNAText>Variant: flat</DNAText>
        <View style={styles.horizontal}>
          <DNAButton
            label="Button"
            variant="flat"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Custom"
            variant="flat"
            color="success"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Disabled"
            isDisabled
            variant="flat"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Icon"
            variant="flat"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            isLoading
            label="Loading"
            variant="flat"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Icon right"
            iconPosition="right"
            variant="flat"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
        </View>
        <View style={{marginTop: 10}} />
      </View>
      <View style={styles.gap}>
        <DNAText>Variant: outlined</DNAText>
        <View style={styles.horizontal}>
          <DNAButton
            label="Button"
            variant="outlined"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Custom"
            variant="outlined"
            color="success"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Disabled"
            isDisabled
            variant="outlined"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Icon"
            variant="outlined"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            isLoading
            label="Loading"
            variant="outlined"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Icon right"
            iconPosition="right"
            variant="outlined"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
        </View>
        <View style={{marginTop: 10}} />
      </View>
      <View style={styles.gap}>
        <DNAText>Variant: soft</DNAText>
        <View style={styles.horizontal}>
          <DNAButton
            label="Button"
            variant="soft"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Custom"
            variant="soft"
            color="success"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Disabled"
            isDisabled
            variant="soft"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Icon"
            variant="soft"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            isLoading
            label="Loading"
            variant="soft"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Icon right"
            iconPosition="right"
            variant="soft"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
        </View>
        <View style={{marginTop: 10}} />
      </View>
      <View style={styles.gap}>
        <DNAText>Variant: solid</DNAText>
        <View style={styles.horizontal}>
          <DNAButton
            label="Button"
            variant="solid"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Custom"
            variant="solid"
            color="success"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Disabled"
            isDisabled
            variant="solid"
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Icon"
            variant="solid"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            isLoading
            label="Loading"
            variant="solid"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
          <DNAButton
            label="Icon right"
            iconPosition="right"
            variant="solid"
            icon={UploadCloudIconOutline}
            onPress={() => {
              console.log('onPress 2');
            }}
          />
        </View>
        <View style={{marginTop: 10}} />
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
  horizontal: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  vertical: {
    gap: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default RippleScreen;
