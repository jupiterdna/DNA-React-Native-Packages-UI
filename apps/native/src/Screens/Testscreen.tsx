import {View, Text, StyleSheet, useColorScheme, ViewStyle} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
import {UserIcon} from '@rndna/icon';
import {useColor} from '@rndna/theme-provider';
import {useFont} from '@rndna/fonts';
import {G} from 'react-native-svg';

const Testscreen: React.FC<any> = () => {
  console.log("useFont('Lato', 'bold')", useFont('Lato', 'bold', 'italic'));
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
        <Text style={[styles.header]}>Native : {useColorScheme()} Modes</Text>
        <Text
          style={[
            useFont('Lato', 'light'),
            {
              fontSize: 30,
            },
          ]}>
          testss
        </Text>
        <View style={styles.gap}>
          <DNAChip
            label="Chips"
            size="sm"
            icon={UserIcon}
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNAChip
            label="Chip"
            isClosable
            size="sm"
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNAChip
            label="Chip"
            isClosable
            size="default"
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNAChip
            label="Chip"
            isDisabled
            isClosable
            size="default"
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNAChip
            label="Chip"
            isClosable
            size="md"
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNAChip
            label="Chip"
            color="success"
            size="lg"
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
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
    marginBottom: 20,
    fontSize: 36,
  },
  gap: {
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Testscreen;
