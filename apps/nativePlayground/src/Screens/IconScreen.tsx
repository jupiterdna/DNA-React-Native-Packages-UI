import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useMemo} from 'react';
import * as Icon from '@rndna/icon';
import {DNAText} from '@rndna/text';
import {DNATextField} from '@rndna/textfield';
import {DNAButton} from '@rndna/button';
import Clipboard from '@react-native-clipboard/clipboard';
const IconScreen = () => {
  const [value, setvalue] = React.useState('');

  const memIcons = useMemo(() => {
    return Object.keys(Icon).filter(icon => {
      return icon.toLowerCase().includes(value.toLowerCase());
    });
  }, [value]);

  return (
    <>
      <View style={[styles.searchContainer]}>
        <DNATextField
          value={value}
          onChangeText={text => {
            setvalue(text);
          }}
          placeholder="Search Icon"
          icon={Icon.SearchIcon}
        />
      </View>
      <ScrollView style={[styles.container, styles.flex]}>
        <DNAText style={styles.labelStyle}>Gorental Icons</DNAText>
        <View style={styles.divider} />
        <View style={styles.rowContainer}>
          {memIcons.map((icon, index) => {
            const IconComponent = Icon[icon];

            return (
              <View style={styles.itemsIcon} key={index}>
                {<IconComponent size={30} />}
                <DNAText style={styles.itemlabel}>{icon}</DNAText>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <DNAButton
                    label="Copy JSX"
                    size="xs"
                    icon={<Icon.CopyIcon size={18} color={'#969494'} />}
                    variant="outlined"
                    color="default"
                    onPress={() => {
                      Clipboard.setString(`<${icon} size={30} color='#333'/>`);
                    }}
                  />
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.divider} />
      </ScrollView>
      <View style={styles.viewDocs} />
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  searchContainer: {paddingTop: 20, paddingHorizontal: 20},
  itemsIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '49%',
    backgroundColor: '#ededed',
    padding: 10,
  },
  viewDocs: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  itemlabel: {
    fontSize: 11,
  },
  labelStyle: {
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 15,
  },
  container: {
    paddingHorizontal: 20,
  },
  rowContainer: {
    display: 'flex',
    columnGap: 5,
    rowGap: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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

export default IconScreen;
