import {
  Linking,
  ScrollView,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {UserAddIcon, WarningIcon, FileIcon} from '@rndna/icon';
import {DNATextField} from '@rndna/textfield';
import {
  DNARadioButton,
  DNARadioButtonProps,
  DNARadioGroup,
} from '@rndna/radiobutton';
import {DNAText} from '@rndna/text';
import {DNAButton} from '@rndna/button';
import {Link} from '@react-navigation/native';
import {WebDocs_URL} from './Utils/hooks';

const option: DNARadioButtonProps[] = [
  {
    id: 'test',
    label: 'tests',
  },
  {
    id: 'test2',
    label: 'tests2',
    checked: true,
  },
];

const TextFieldScreen = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <ScrollView style={[styles.container, styles.flex]}>
        <DNAText style={styles.label}>Variant Filled:</DNAText>
        <DNATextField
          variant="filled"
          prefix="Dr"
          placeholder="Label"
          value={value}
          onChange={e => {
            setValue(e);
          }}
          // assistiveText={{
          //   type: 'error',
          //   message: 'This error!',
          // }}
        />
        <DNAText style={styles.label}>Variant Outline:</DNAText>
        <DNATextField
          variant="outlined"
          placeholder="Label"
          value={'123!'}
          onChange={e => {
            setValue(e);
          }}
        />
        <DNAText style={styles.label}>Variant Flat:</DNAText>
        <DNATextField
          // icon={UserAddIcon}
          variant="flat"
          placeholder="Flat TextField"
          value={'123!'}
          onChange={e => {
            setValue(e);
          }}
          // assistiveText={{
          //   type: 'error',
          //   message: 'This error!',
          // }}
        />
        <DNAText style={styles.label}>With Error</DNAText>
        <DNATextField
          placeholder="Label"
          required
          value={value}
          onChange={e => {
            setValue(e);
          }}
          assistiveText={{
            type: 'error',
            message: 'This error!',
            icon: WarningIcon,
          }}
          onBlur={() => {
            console.log('blurred');
          }}
        />
        <DNAText style={styles.label}>With Icon</DNAText>
        <DNATextField
          icon={UserAddIcon}
          placeholder="Label"
          required
          value={value}
          onChange={e => {
            setValue(e);
          }}
          onBlur={() => {
            console.log('blurred');
          }}
        />

        <DNAText style={styles.label}>With Clearable</DNAText>
        <DNATextField
          icon={UserAddIcon}
          placeholder="Label"
          required
          value={value}
          onChange={e => {
            setValue(e);
          }}
          onBlur={() => {
            console.log('blurred');
          }}
          clearable
        />
      </ScrollView>
      <View>
        <DNAButton
          label="Read Docs"
          color="primary"
          size="lg"
          onPress={() => {
            Linking.openURL(WebDocs_URL + 'docs/components/textfield');
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

export default TextFieldScreen;
