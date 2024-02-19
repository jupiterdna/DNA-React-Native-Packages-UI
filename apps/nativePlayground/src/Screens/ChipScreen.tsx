import {View} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
import {UserAddIcon} from '@rndna/icon';
import {DNAText} from '@rndna/text';

const ChipScreen = () => {
  return (
    <View style={[styles.container, styles.flex]}>
      <DNAText style={styles.labelStyle}>Default</DNAText>
      <View style={styles.rowContainer}>
        <DNAChip
          label="Chip"
          color="default"
          size="xs"
          icon={<UserAddIcon color={'white'} size={15} />}
        />
        <DNAChip
          label="Chip"
          color="info"
          size="sm"
          icon={<UserAddIcon color={'white'} size={15} />}
        />
        <DNAChip
          label="Chip"
          color="primary"
          size="md"
          icon={<UserAddIcon color={'white'} size={15} />}
        />
        <DNAChip
          label="Chip"
          color="success"
          size="lg"
          icon={<UserAddIcon color={'white'} size={17} />}
        />
      </View>
      <View style={styles.divider} />
      <DNAText style={styles.labelStyle}>With Icon</DNAText>
      <View style={styles.rowContainer}>
        <DNAChip
          label="Chip"
          color="default"
          size="xs"
          icon={<UserAddIcon color={'white'} size={15} />}
        />
        <DNAChip
          label="Chip"
          color="info"
          size="sm"
          icon={<UserAddIcon color={'white'} size={15} />}
        />
        <DNAChip
          label="Chip"
          color="primary"
          size="md"
          icon={<UserAddIcon color={'white'} size={15} />}
        />
        <DNAChip
          label="Chip"
          color="success"
          size="lg"
          icon={<UserAddIcon color={'white'} size={17} />}
        />
      </View>
    </View>
  );
};

const styles = {
  flex: {
    flex: 1,
  },
  labelStyle: {
    marginBottom: 7,
  },
  container: {
    padding: 20,
  },
  rowContainer: {
    display: 'flex',
    columnGap: 5,
    flexDirection: 'row',
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

export default ChipScreen;
