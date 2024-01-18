import {View, StyleSheet, useColorScheme, ViewStyle} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
import {DNABadge} from '@rndna/badge';
import {DNACollapsible} from '@rndna/collapsible';
import {DNAButton} from '@rndna/button';
import {HelpCircleIcon} from '@rndna/icon';
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
        <DNACollapsible title={'collapsible'} color="danger">
          <DNAText>"Lorem ipsum dolor sit amet, consectetur adipiscing</DNAText>
          <View style={styles.gap}>
            <DNAButton label="primary" />
            <DNAButton icon={HelpCircleIcon} label="primary" />
            <DNAButton icon={HelpCircleIcon} />
            <DNAChip isClosable label="default" color="default" />
            <DNABadge value="badge" color="danger">
              <DNAChip label="default" color="default" />
            </DNABadge>
          </View>
          <View style={styles.gap}>
            <DNAButton label="primary" variant="outlined" />
            <DNAButton
              icon={HelpCircleIcon}
              label="primary"
              variant="outlined"
            />
            <DNAChip
              isClosable
              label="default"
              color="default"
              variant="outlined"
            />
            <DNABadge color="danger">
              <DNAChip label="default" color="default" variant="outlined" />
            </DNABadge>
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
