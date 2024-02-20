import {Linking, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {optionItems, FabItems, avatarGroup} from './constants';
import {DNAText} from '@rndna/text';
import {DNAButton} from '@rndna/button';
import {FileIcon} from '@rndna/icon';
import {WebDocs_URL} from './Utils/hooks';
import {DNAImage} from '@rndna/image';

const ImageScreen = () => {
  return (
    <>
      <ScrollView style={[styles.container, styles.flex]}>
        <DNAText style={styles.label}>Image Default</DNAText>
        <View style={styles.gap}>
          <DNAImage
            src={avatarGroup[0].src}
            fit="contain"
            ratio="4:3"
            size="xs"
          />
          <DNAImage
            src={avatarGroup[0].src}
            fit="contain"
            ratio="4:3"
            size="sm"
          />
          <DNAImage
            src={avatarGroup[0].src}
            fit="contain"
            ratio="4:3"
            size="md"
          />
          <DNAImage
            src={avatarGroup[0].src}
            fit="contain"
            ratio="4:3"
            size="lg"
          />
          <DNAImage
            src={avatarGroup[0].src}
            fit="contain"
            ratio="4:3"
            size="xl"
          />
        </View>
        <View style={styles.gap}>
          <DNAImage src={avatarGroup[0].src} ratio="4:3" size="xs" />
          <DNAImage src={avatarGroup[0].src} ratio="4:3" size="sm" />
          <DNAImage src={avatarGroup[0].src} ratio="4:3" size="md" />
          <DNAImage src={avatarGroup[0].src} ratio="4:3" size="lg" />
          <DNAImage src={avatarGroup[0].src} ratio="4:3" size="xl" />
        </View>
      </ScrollView>
      <View>
        <DNAButton
          label="Read Docs"
          color="primary"
          size="lg"
          onPress={() => {
            Linking.openURL(WebDocs_URL + 'docs/components/badge');
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
  flexRow: {
    flexDirection: 'row',
    columnGap: 10,
  },
  divider: {
    height: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 20,
  },
  gap: {
    gap: 10,
  },
  container: {
    padding: 20,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgrey',
  },
});

export default ImageScreen;
