import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from '@rndna/dropdown';
import {Menu} from '@rndna/menu';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
];

const DropdownScreen: React.FC<any> = () => {
  const [value, setValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.flex}>
      <Menu
        labelField={'label'}
        valueField={'value'}
        data={data}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={value}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    padding: 50,
    backgroundColor: '#c0bfbf',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  header: {
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  gap: {
    marginBottom: 8,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DropdownScreen;
