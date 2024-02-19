import {View} from 'react-native';
import React from 'react';
import {DNABadge} from '@rndna/badge';

const BadgeScreen = () => {
  return (
    <View style={[styles.container, styles.flex]}>
      <View style={styles.circle}>
        <DNABadge value="Badge" />
      </View>
      <View style={styles.divider} />
      <View style={styles.circle}>
        <DNABadge value="Badge" color="danger" />
      </View>
      <View style={styles.divider} />
      <View style={styles.circle}>
        <DNABadge color="danger" />
      </View>
      <View style={styles.divider} />
      <View style={styles.circle}>
        <DNABadge color="primary" />
      </View>
    </View>
  );
};

const styles = {
  flex: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgrey',
  },
  divider: {
    height: 20,
  },
};

export default BadgeScreen;
