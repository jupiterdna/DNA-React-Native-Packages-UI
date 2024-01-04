import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '@dnamobile/ui';
import {TextField} from '@dnamobile/textfield';

const Native = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <Button
        onClick={() => {
          console.log('Pressed!');
        }}
        text="Boop"
      />
      <TextField value="eeee" />
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
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
});
