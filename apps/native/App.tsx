import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {Chip} from '@dnamobile/chip';
// import {Button} from '@dnamobile/button';
// import {Collapsible} from '@dnamobile/collapsible';
// import {RadioButton} from '@dnamobile/radiobutton';

const Native = () => {
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    {id: '1', value: 'option1', label: 'Option 1', checked: false},
    {
      id: '2',
      value: 'option2',
      label: 'Option 2',
      checked: false,
      childrenOptions: [
        {
          id: '2.1',
          value: 'childOption1',
          label: 'Child Option 1',
          checked: false,
        },
        {
          id: '2.2',
          value: 'childOption2',
          label: 'Child Option 2',
          checked: false,
        },
      ],
    },
    {
      id: '3',
      value: 'option3',
      label: 'Option 3',
      checked: false,
      childrenOptions: [
        {
          id: '3.1',
          value: 'childOption1',
          label: 'Child Option 1',
          checked: false,
        },
        {
          id: '3.2',
          value: 'childOption2',
          label: 'Child Option 2',
          checked: false,
        },
      ],
    },
  ];

  const handleOptionChange = (option: Option) => {
    setSelectedOption(option.id);
  };

  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>Native</Text>
      <Chip
        label="Chip"
        isClosable
        size="default"
        onPress={() => console.log('pressed')}
        onPressClose={() => console.log('closeddd')}
      />
      <Button label="Button" color="info" />
      <Collapsible title="Collapsible Title">
        <View>
          <Text>Sample Children: Lorem ipsum dolor sit amet</Text>
        </View>
      </Collapsible>
      <View>
        <RadioButton
          label="Fruits"
          gap_y="default"
          required
          selected={selectedOption}
          onChange={handleOptionChange}
          options={options}
        />
      </View>
    </View>
  );
};

export default Native;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
