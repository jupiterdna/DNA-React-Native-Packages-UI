import {Linking, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {DNAButton} from '@rndna/button';
import {WebDocs_URL} from './Utils/hooks';
import {DNASwitch} from '@rndna/switch';
import {SunIcon, MoonIcon, FileIcon} from '@rndna/icon';
import {DNAText} from '@rndna/text';

const SwitchScreen = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleSwitchChange = (newValue: boolean) => {
    setIsChecked(newValue);
  };

  return (
    <>
      <View style={[styles.container, styles.flex]}>
        <View style={styles.gap}>
          <DNAText>Variant: solid</DNAText>
          <View style={styles.rowGap}>
            <DNASwitch
              labelLeft="OFF"
              labelRight="ON"
              checked={isChecked}
              onValueChange={handleSwitchChange}
            />
            <DNASwitch
              labelLeft="OFF"
              labelRight="ON"
              iconLeft={SunIcon}
              iconRight={MoonIcon}
              checked={isChecked}
              onValueChange={handleSwitchChange}
            />
          </View>
        </View>
        <View style={styles.gap}>
          <DNAText>Variant: filled</DNAText>
          <View style={styles.rowGap}>
            <DNASwitch
              labelLeft="OFF"
              labelRight="ON"
              checked={isChecked}
              variant="filled"
              onValueChange={handleSwitchChange}
            />
            <DNASwitch
              labelLeft="OFF"
              labelRight="ON"
              iconLeft={SunIcon}
              iconRight={MoonIcon}
              checked={isChecked}
              variant="filled"
              onValueChange={handleSwitchChange}
            />
          </View>
        </View>
      </View>
      <View>
        <DNAButton
          label="Read Docs"
          color="primary"
          size="lg"
          onPress={() => {
            Linking.openURL(WebDocs_URL + 'docs/components/switch');
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
    alignItems: 'flex-start',
    gap: 30,
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
    flexWrap: 'wrap',
  },
  gap: {
    gap: 5,
  },
  rowGap: {
    gap: 20,
  },
});

export default SwitchScreen;
