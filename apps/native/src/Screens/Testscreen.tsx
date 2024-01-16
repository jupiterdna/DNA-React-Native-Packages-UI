import {View, StyleSheet} from 'react-native';
import React from 'react';
import {DNAButton} from '@rndna/button';
import {UserIcon} from '@rndna/icon';

const Testscreen: React.FC<any> = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>Native</Text>
      <View style={styles.gap}>
        <DNAButton label="Button" color="danger" icon={UserIcon} size="sm" />
        <DNAButton
          label="Button"
          color="danger"
          icon={UserIcon}
          size="sm"
          isLoading
        />
        <DNAButton label="Button" color="info" icon={UserIcon} />
        <DNAButton label="Button" color="info" icon={UserIcon} isLoading />
        <DNAButton label="Button" color="success" icon={UserIcon} size="md" />
        <DNAButton
          label="Button"
          color="success"
          icon={UserIcon}
          size="md"
          isLoading
        />
        <DNAButton label="Button" color="warning" icon={UserIcon} size="lg" />
        <DNAButton
          label="Button"
          color="warning"
          icon={UserIcon}
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
        <DNAButton label="Button" color="warning" variant="flat" size="lg" />
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
    marginBottom: 8,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Testscreen;
