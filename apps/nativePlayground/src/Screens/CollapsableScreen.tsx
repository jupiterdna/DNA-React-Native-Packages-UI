import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import Collapsable from './Component/Collapsable/Collapsable';

const CollapsableScreen = () => {
  return (
    <View style={styles.container}>
      <Collapsable title="Collapsible" color="warning">
        <Text>sdfsdf</Text>
        <Text>sdfsdf</Text>
        <Text>sdfsdf</Text>
        <Text>sdfsdf</Text>
        <Text>sdfsdf</Text>
        <Text>sdfsdf</Text>
      </Collapsable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    position: 'relative',
    padding: 30,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignSelf: 'flex-end',
  },
});

export default CollapsableScreen;
