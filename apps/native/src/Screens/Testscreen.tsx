import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
import {UserIcon} from '@rndna/icon';

const Testscreen: React.FC<any> = () => {
  return (
    <View style={{flex: 1}}>
      <View style={[styles.container]}>
        <Text style={styles.header}>Native</Text>
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
    fontWeight: 'bold',
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
