import {Linking, StyleSheet, View} from 'react-native';
import React from 'react';
import {DNAText} from '@rndna/text';
import {DNAButton} from '@rndna/button';
import {WebDocs_URL} from './Utils/hooks';
import {FileIcon} from '@rndna/icon';
import {useFonts} from '@rndna/theme-provider';

const TextScreen = () => {
  const theme = useFonts();

  return (
    <>
      <View style={[styles.container, styles.flex]}>
        <DNAText
          style={{
            fontSize: theme.fontSize?.h4,
          }}>
          This is default text from @rndna/text with h4 font size
        </DNAText>
        <DNAText
          style={{
            fontSize: theme.fontSize?.h5,
          }}>
          This is default text from @rndna/text with h5 font size
        </DNAText>
        <DNAText
          style={{
            fontSize: theme.fontSize?.h6,
          }}>
          This is default text from @rndna/text with h6 font size
        </DNAText>
        <DNAText
          style={{
            fontSize: theme.fontSize?.body1,
          }}>
          This is default text from @rndna/text with body1 font size
        </DNAText>
        <DNAText
          style={{
            fontSize: theme.fontSize?.label,
          }}>
          This is default text from @rndna/text with label font size
        </DNAText>
        <DNAText
          style={{
            fontSize: theme.fontSize?.body2,
          }}>
          This is default text from @rndna/text with body2 font size
        </DNAText>
        <DNAText
          style={{
            fontSize: theme.fontSize?.caption,
          }}>
          This is default text from @rndna/text with caption font size
        </DNAText>
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

export default TextScreen;
