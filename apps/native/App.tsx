import React from 'react';
<<<<<<< HEAD
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
=======
import {ThemeProvider, themeConfig} from '@rndna/theme-provider';
import Testscreen from './src/Screens/Testscreen';

const Native = () => {
  return (
    <ThemeProvider config={themeConfig}>
       <Testscreen />
    </ThemeProvider>
>>>>>>> 01cdf4b6cb60019e0bc56c979892526e2029282e
  );
};

export default Native;

<<<<<<< HEAD
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
=======
>>>>>>> 01cdf4b6cb60019e0bc56c979892526e2029282e
