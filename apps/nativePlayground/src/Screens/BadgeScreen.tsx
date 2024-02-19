import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DNABadge} from '@rndna/badge';

const BadgeScreen = () => {
  return (
    <View style={[styles.container, styles.flex]}>
      <DNABadge value="Badge">
        <View style={styles.circle} />
      </DNABadge>
      <DNABadge value="Badge" color="danger">
        <View style={styles.circle} />
      </DNABadge>
      <DNABadge value="Badge" position="bottom">
        <View style={styles.circle} />
      </DNABadge>
      <DNABadge value="Badge" color="danger" position="bottom">
        <View style={styles.circle} />
      </DNABadge>
      <DNABadge>
        <View style={styles.circle} />
      </DNABadge>
      <DNABadge color="danger">
        <View style={styles.circle} />
      </DNABadge>
      <DNABadge position="bottom">
        <View style={styles.circle} />
      </DNABadge>
      <DNABadge color="danger" position="bottom">
        <View style={styles.circle} />
      </DNABadge>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'flex-start',
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgrey',
  },
});

export default BadgeScreen;
