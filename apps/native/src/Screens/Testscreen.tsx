import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useColor, getColorTheme} from '@rndna/theme-provider';
import {DNAText} from '@rndna/text';

const Testscreen = () => {
  const theme = getColorTheme();
  const color = useColor();

  console.log('color', color);
  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme === 'dark' ? '#222' : '#fff',
          },
        ]}>
        <DNAText type="h1">H1</DNAText>
        <DNAText type="h2">H2</DNAText>
        <DNAText type="h3">H3</DNAText>
        <DNAText type="h4">H4</DNAText>
        <DNAText type="h5">H5</DNAText>
        <DNAText type="h6">H6</DNAText>
        <DNAText type="subtitle1">Subtitle 1</DNAText>
        <DNAText type="subtitle2">Subtitle 2</DNAText>
        <DNAText type="body1">Body 1</DNAText>
        <DNAText type="body2">Body 2</DNAText>
        <DNAText type="button">Button</DNAText>
        <DNAText type="caption">Caption</DNAText>
        <DNAText type="overline">overline</DNAText>
        <DNAText>default fontSize</DNAText>
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
});

export default Testscreen;
