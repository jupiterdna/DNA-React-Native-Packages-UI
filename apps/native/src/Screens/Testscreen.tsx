import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DNAButton} from '@rndna/button';
import {AgeIcon} from '@rndna/icon';

const Testscreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={[styles.container]}>
        <Text style={styles.header}>Native</Text>
        <View style={styles.gap}>
          <DNAButton label="Button" color="danger" icon={AgeIcon} size="sm" />
          <DNAButton
            label="Button"
            color="danger"
            icon={AgeIcon}
            size="sm"
            isLoading
          />
          <DNAButton label="Button" color="info" icon={AgeIcon} />
          <DNAButton label="Button" color="info" icon={AgeIcon} isLoading />
          <DNAButton label="Button" color="success" icon={AgeIcon} size="md" />
          <DNAButton
            label="Button"
            color="success"
            icon={AgeIcon}
            size="md"
            isLoading
          />
          <DNAButton label="Button" color="warning" icon={AgeIcon} size="lg" />
          <DNAButton
            label="Button"
            color="warning"
            icon={AgeIcon}
            size="lg"
            isLoading
          />
        </View>
        <View style={styles.gap}>
          <DNAButton label="Button" color="danger" size="sm" />
          <DNAButton label="Button" color="info" size="default" />
          <DNAButton
            label="Button"
            color="success"
            variant="outlined"
            size="md"
          />
          <DNAButton label="Button" color="warning" size="lg" />
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
    marginBottom: 8,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Testscreen;
