import {View, StyleSheet, useColorScheme, ViewStyle} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
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
          <View style={styles.gap}>
            <DNAButton label="Button" size="xs" />
            <DNAButton label="Button" size="sm" />
            <DNAButton label="Button" size="md" />
            <DNAButton label="Button" size="lg" />
            <DNAButton label="Button" size="xl" />
          </View>
          <View style={styles.gap}>
            <DNAButton icon={InfoCircleIcon} label="Button" size="xs" />
            <DNAButton icon={InfoCircleIcon} label="Button" size="sm" />
            <DNAButton icon={InfoCircleIcon} label="Button" size="md" />
            <DNAButton icon={InfoCircleIcon} label="Button" size="lg" />
            <DNAButton icon={InfoCircleIcon} label="Button" size="xl" />
          </View>
          <View style={styles.gap}>
            <DNAButton icon={InfoCircleIcon} size="xs" />
            <DNAButton icon={InfoCircleIcon} size="sm" />
            <DNAButton icon={InfoCircleIcon} size="md" />
            <DNAButton icon={InfoCircleIcon} size="lg" />
            <DNAButton icon={InfoCircleIcon} size="xl" />
          </View>
        </DNACollapsible>
        <DNACollapsible title={'Chips'}>
          <View style={styles.gap}>
            <DNAChip label="Chip" size="xs" variant="soft" />
            <DNAChip label="Chip" size="sm" />
            <DNAChip label="Chip" size="md" />
            <DNAChip label="Chip" size="lg" />
            <DNAChip label="Chip" size="xl" />
          </View>
          <View style={styles.gap}>
            <DNAChip icon={InfoCircleIcon} label="Chip" size="xs" />
            <DNAChip icon={InfoCircleIcon} label="Chip" size="sm" />
            <DNAChip icon={InfoCircleIcon} label="Chip" size="md" />
            <DNAChip icon={InfoCircleIcon} label="Chip" size="lg" />
            <DNAChip icon={InfoCircleIcon} label="Chip" size="xl" />
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
