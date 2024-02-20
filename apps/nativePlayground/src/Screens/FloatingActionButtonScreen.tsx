import {Linking, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import {DNAText} from '@rndna/text';
import {DNAButton} from '@rndna/button';
import {WebDocs_URL} from './Utils/hooks';
import {FileIcon} from '@rndna/icon';
import {DNAFab} from '@rndna/fab';

const FloatingActionButton = () => {
  return (
    <>
      <View style={[styles.container, styles.flex]}>
        <DNAText style={styles.label}>Default Fab With Add icon</DNAText>
        <View style={styles.fab}>
          <DNAFab
            size="md"
            items={[
              {
                title: 'Option 1',
                icon: <FileIcon size={20} color={'#adabab'} />,
                onPress: () => {},
              },
              {
                title: 'Option 2',
                icon: <FileIcon size={20} color={'#adabab'} />,
                onPress: () => {},
              },
              {
                title: 'Option 3',
                icon: <FileIcon size={20} color={'#adabab'} />,
                onPress: () => {},
              },
            ]}
          />
        </View>
      </View>
      <View>
        <DNAButton
          label="Read Docs"
          color="primary"
          size="lg"
          onPress={() => {
            Linking.openURL(WebDocs_URL + 'docs/components/fab');
          }}
          icon={<FileIcon size={20} color={'#fff'} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  fab: {
    maxWidth: '100%',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  _fabContainer: {
    flexDirection: 'row',
    // position: 'absolute',
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  get fabContainer() {
    return this._fabContainer;
  },
  set fabContainer(value) {
    this._fabContainer = value;
  },
  flexRow: {
    flexDirection: 'row',
    columnGap: 10,
  },
  divider: {
    height: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 15,
  },
  container: {
    padding: 20,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
  },
});

export default FloatingActionButton;
