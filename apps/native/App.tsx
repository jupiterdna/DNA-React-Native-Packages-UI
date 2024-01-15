import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DNAButton} from '@rndna/button';
import {AddonIcon} from '@rndna/icon';

const Native = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>Native</Text>
      <View style={styles.gap}>
        <DNAButton label="button" size="md" icon={AddonIcon} />
        <DNAButton label="button" variant="outlined" size="sm" />
        <DNAButton label="button" isDisabled />
        <DNAButton label="button" size="md" />
        <DNAButton label="button" color="info" size="lg" />
        <DNAButton label="button" isDisabled isLoading />
      </View>
    </View>
  );
};

export default Native;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
  gap: {
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
