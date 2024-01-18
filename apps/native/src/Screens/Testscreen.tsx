import {View, StyleSheet, useColorScheme, ViewStyle} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
import {DNABadge} from '@rndna/badge';
import {DNACollapsible} from '@rndna/collapsible';
import {DNAButton} from '@rndna/button';
import {HelpIcon, InfoCircleIcon} from '@rndna/icon';
import {DNAText} from '@rndna/text';

const Testscreen: React.FC<any> = () => {
  const bg: ViewStyle =
    useColorScheme() === 'dark'
      ? {
          backgroundColor: '#333',
        }
      : {
          backgroundColor: '#fff',
        };

  return (
    <View style={styles.flex}>
      <View style={[styles.container, bg]}>
        <DNAText type="h4" style={styles.header}>
          Native: {useColorScheme()} Mode
        </DNAText>
        <DNACollapsible title={'Buttons'}>
          <DNAText style={styles.title}>basic</DNAText>
          <View style={styles.gap}>
            <DNAButton label="Button" size="sm" />
            <DNAButton label="Button" size="default" />
            <DNAButton label="Button" size="md" />
            <DNAButton label="Button" size="lg" />
          </View>
          <View style={styles.gap}>
            <DNAText style={styles.title}>w-icon</DNAText>
            <DNAButton icon={InfoCircleIcon} label="Button" size="sm" />
            <DNAButton icon={InfoCircleIcon} label="Button" size="default" />
            <DNAButton icon={InfoCircleIcon} label="Button" size="md" />
            <DNAButton icon={InfoCircleIcon} label="Button" size="lg" />
          </View>
          <View style={styles.gap}>
            <DNAText style={styles.title}>icon only</DNAText>
            <DNAButton icon={InfoCircleIcon} size="sm" />
            <DNAButton icon={InfoCircleIcon} size="default" />
            <DNAButton icon={InfoCircleIcon} size="md" />
            <DNAButton icon={InfoCircleIcon} size="lg" />
          </View>
        </DNACollapsible>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  gap: {
    marginBottom: 8,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Testscreen;
