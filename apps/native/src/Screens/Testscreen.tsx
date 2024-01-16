import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {DNAChip} from '@rndna/chip';

const Testscreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={[styles.container]}>
        <Text style={styles.header}>Native</Text>
        <View style={styles.gap}>
          <DNAChip
            label="Chip"
            size="sm"
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
            isClosable
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
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Testscreen;
