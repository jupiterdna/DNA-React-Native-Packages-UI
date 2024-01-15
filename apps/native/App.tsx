import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DNAButton} from '@rndna/button';

const Native = () => {
  return (
    <View style={[styles.container]}>
    <Text style={styles.header}>Native</Text>
      <Text>Sizes</Text>
      <View style={styles.gap}>
        <DNAButton label="button" size="sm" />
        <DNAButton label="button" variant="outlined" size="sm" />
        <DNAButton label="button" size="default" isDisabled />
        <DNAButton label="button" size="md" isLoading />
        <DNAButton label="button" color="info" size="lg" />
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
  }
});
