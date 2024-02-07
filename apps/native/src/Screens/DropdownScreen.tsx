import {
  View,
  StyleSheet,
  ScrollView,
  ViewStyle,
  useColorScheme,
  Text,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Menu} from '@rndna/menu';
import {MenuHamburgerIcon} from '@rndna/icon';
import {DNAButton} from '@rndna/button';

const data = [
  {asd: 'Item 1', value: '1', text: '123'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
];

const DropdownScreen: React.FC<any> = () => {
  const bg: ViewStyle =
    useColorScheme() === 'dark'
      ? {
          backgroundColor: '#333',
        }
      : {
          backgroundColor: '#fff',
        };

  const [value, setValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState<any>(null);
  const [value2, setValue2] = useState<any>(null);
  const [isFocus2, setIsFocus2] = useState(false);
  const ref = useRef(null);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={[styles.flex, bg]}>
      <View
        style={{
          backgroundColor: 'red',
          position: 'fixed',
          top: 120,
          left: 353 - 50,
        }}
      />
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              justifyContent: 'flex-end',
              flexDirection: 'row',
            },
          ]}>
          <Menu
            dropDownMaxWidth={120}
            data={data}
            maxHeight={300}
            labelField="asd"
            valueField="value"
            value={value}
            onChange={(item: (typeof data)[0]) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            ref={ref}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    padding: 50,
    paddingRight: 10,
  },
  container: {
    // padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DropdownScreen;
