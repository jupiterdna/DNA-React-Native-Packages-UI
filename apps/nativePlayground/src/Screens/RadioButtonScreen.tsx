import {View} from 'react-native';
import React, {useState} from 'react';
import {
  DNARadioButton,
  DNARadioButtonProps,
  DNARadioGroup,
} from '@rndna/radiobutton';

const option: DNARadioButtonProps[] = [
  {
    id: 'label',
    label: 'label',
  },
  {
    id: 'label2',
    label: 'label2',
    checked: true,
  },
];

const RadioButtonScreen = () => {
  const [selected, setSelected] = useState<DNARadioButtonProps | undefined>(
    option?.find(o => o.checked),
  );

  return (
    <View style={{flex: 1, padding: 30}}>
      <DNARadioGroup
        orientation="horizontal"
        label="Radio Group Horizontal"
        children={option.map(op => {
          const active = selected?.id === op.id;
          return (
            <DNARadioButton
              {...op}
              key={op.id}
              checked={active}
              onPress={() => {
                setSelected(op);
              }}
            />
          );
        })}
        required
      />
      <View style={{marginTop: 20}} />
      <DNARadioGroup
        orientation="vertical"
        label="Radio Group Vertical"
        required>
        {option.map(op => {
          const active = selected?.id === op.id;
          return (
            <DNARadioButton
              {...op}
              key={op.id}
              checked={active}
              onPress={() => {
                setSelected(op);
              }}
            />
          );
        })}
      </DNARadioGroup>
      <View style={{marginTop: 20}} />
      <DNARadioGroup
        orientation="vertical"
        disabled
        label="Radio Group Disabled"
        required>
        {option.map(op => {
          const active = selected?.id === op.id;
          return (
            <DNARadioButton
              {...op}
              key={op.id}
              checked={active}
              onPress={() => {
                setSelected(op);
              }}
            />
          );
        })}
      </DNARadioGroup>
      <View style={{marginTop: 20}} />
      <DNARadioGroup
        orientation="vertical"
        assistiveText={{
          type: 'error',
          message: "There's an error",
        }}
        label="Radio Group Error"
        required>
        {option.map(op => {
          const active = selected?.id === op.id;
          return (
            <DNARadioButton
              {...op}
              key={op.id}
              checked={active}
              onPress={() => {
                setSelected(op);
              }}
            />
          );
        })}
      </DNARadioGroup>
    </View>
  );
};

export default RadioButtonScreen;
