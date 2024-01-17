import {View, Text, StyleSheet, useColorScheme, ViewStyle} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
import {DNABadge} from '@rndna/badge';
import {DNAButton} from '@rndna/button';
import {UserIcon} from '@rndna/icon';
import {useColor} from '@rndna/theme-provider';

const Testscreen: React.FC<any> = () => {
  const color = useColor();

  const bg: ViewStyle =
    useColorScheme() === 'dark'
      ? {
          backgroundColor: '#333',
        }
      : {
          backgroundColor: '#fff',
        };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <View style={[styles.container, bg]}>
        <Text
          style={[
            styles.header,
            {
              color: color.default['700'],
            },
          ]}>
          Native : {useColorScheme()} Mode
        </Text>
        <View style={styles.gap}>
          <DNAButton label="primary" color="primary" />
          <DNAButton icon={UserIcon} label="primary" color="primary" />
          <DNAChip isClosable label="secondary" color="primary" />
          <DNABadge value="badge" color="danger">
            <DNAChip label="secondary" color="primary" />
          </DNABadge>
        </View>
        <View style={styles.gap}>
          <DNAButton label="primary" variant="outlined" color="primary" />
          <DNAChip label="secondary" variant="outlined" color="primary" />
          <DNABadge value="badge" color="danger">
            <DNAChip label="secondary" variant="outlined" color="primary" />
          </DNABadge>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 8,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Testscreen;
