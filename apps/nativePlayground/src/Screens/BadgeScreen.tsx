import {Linking, StyleSheet, View} from 'react-native';
import React from 'react';
import {DNABadge} from '@rndna/badge';
import {DNAText} from '@rndna/text';
import {DNAButton} from '@rndna/button';
import {FileIcon} from '@rndna/icon';
import {WebDocs_URL} from './Utils/hooks';

const BadgeScreen = () => {
  return (
    <>
      <View style={[styles.container, styles.flex]}>
        <DNAText style={styles.label}>Badge with Text (Position Top)</DNAText>
        <DNABadge value="Badge">
          <View style={styles.circle} />
        </DNABadge>
        <DNABadge value="Badge" color="danger">
          <View style={styles.circle} />
        </DNABadge>
        <DNAText style={styles.label}>
          Badge with Text (Position Bottom)
        </DNAText>
        <DNABadge value="Badge" position="bottom">
          <View style={styles.circle} />
        </DNABadge>
        <DNABadge value="Badge" color="danger" position="bottom">
          <View style={styles.circle} />
        </DNABadge>
        <DNAText style={styles.label}>
          Badge with Text (Position Inline)
        </DNAText>
        <DNABadge value="Badge" position="inline">
          <View style={styles.circle} />
        </DNABadge>
        <DNABadge value="Badge" color="danger" position="inline">
          <View style={styles.circle} />
        </DNABadge>
        <View style={styles.divider} />
        <DNAText style={styles.label}>Badge Dot</DNAText>
        <View style={styles.flexRow}>
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
          <DNABadge position="inline">
            <View style={styles.circle} />
          </DNABadge>
          <DNABadge color="danger" position="inline">
            <View style={styles.circle} />
          </DNABadge>
        </View>
      </View>
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
