import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Chip} from '@dnamobile/chip';
const Native = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>Native</Text>
      <View style={styles.gap}>
        <Chip
          label="Chip"
          size="sm"
          onPress={() => console.log('pressed')}
          onPressClose={() => console.log('closeddd')}
        />
        <Chip
          label="Chip"
          isClosable
          size="sm"
          onPress={() => console.log('pressed')}
          onPressClose={() => console.log('closeddd')}
        />
        <Chip
          label="Chip"
          isClosable
          size="default"
          onPress={() => console.log('pressed')}
          onPressClose={() => console.log('closeddd')}
        />
        <Chip
          label="Chip"
          isDisabled
          isClosable
          size="default"
          onPress={() => console.log('pressed')}
          onPressClose={() => console.log('closeddd')}
        />
        <Chip
          label="Chip"
          isClosable
          size="md"
          onPress={() => console.log('pressed')}
          onPressClose={() => console.log('closeddd')}
        />
        <Chip
        
          label="Chip"
          isClosable
          color="success"
          size="lg"
          onPress={() => console.log('pressed')}
          onPressClose={() => console.log('closeddd')}
        />
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
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
