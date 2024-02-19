import {StyleSheet, View, Linking} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
import {EyeIcon, UserAddIcon} from '@rndna/icon';
import {DNAText} from '@rndna/text';
import {DNAButton} from '@rndna/button';

const ChipScreen = () => {
  const handleOpenUrl = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <>
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
      <View style={styles.viewDocs}>
        <DNAButton
          label="Read Docs"
          color="primary"
          size="xl"
          onPress={() => {
            handleOpenUrl(
              'https://stackoverflow.com/questions/43804032/open-url-in-default-web-browser',
            );
          }}
          icon={<EyeIcon color="#fff" />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  viewDocs: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
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
});

export default ChipScreen;
