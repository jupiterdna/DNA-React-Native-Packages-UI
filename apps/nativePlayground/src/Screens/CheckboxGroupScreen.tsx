import {Linking, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {DNACheckBoxGroup, DNACheckbox, DNACheckboxProps} from '@rndna/checkbox';
import {DNAButton} from '@rndna/button';
import {WebDocs_URL} from './Utils/hooks';
import {FileIcon} from '@rndna/icon';

const CheckboxGroupScreen = () => {
  const [options, setOptions] = useState<DNACheckboxProps[]>([
    {
      id: '1',
      label: 'Option 1',
      value: 'Option 1',
      checked: true,
    },
    {
      id: '2',
      label: 'Option 2',
      value: 'Option 2',
    },
    {
      id: '3',
      label: 'Option 3',
      value: 'Option 3',
    },
  ]);

  const handleSelect = (option: DNACheckboxProps) => {
    const newOptions = options.map(op => {
      if (op.id === option.id) {
        return {
          ...op,
          checked: !op.checked,
        };
      }
      return op;
    });
    setOptions(newOptions);
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <DNACheckBoxGroup
          orientation="vertical"
          label="Checkbox Group Vertical"
          children={options.map(op => {
            return (
              <DNACheckbox
                {...op}
                key={op.id}
                checked={op.checked}
                onPress={() => {
                  handleSelect(op);
                }}
              />
            );
          })}
          required
        />
        <View style={styles.divider} />
        <DNACheckBoxGroup
          orientation="horizontal"
          label="Checkbox Group Horizontal"
          children={options.map(op => {
            return (
              <DNACheckbox
                {...op}
                key={op.id}
                checked={op.checked}
                onPress={() => {
                  handleSelect(op);
                }}
              />
            );
          })}
          required
        />
        <View style={styles.divider} />
        <DNACheckBoxGroup
          orientation="horizontal"
          disabled
          label="Checkbox Group  Disabled"
          children={options.map(op => {
            return (
              <DNACheckbox
                {...op}
                key={op.id}
                checked={op.checked}
                onPress={() => {
                  handleSelect(op);
                }}
              />
            );
          })}
        />
        <View style={styles.divider} />
        <DNACheckBoxGroup
          assistiveText={{
            type: 'error',
            message: 'This is an error message',
          }}
          orientation="horizontal"
          label="Checkbox Group  Disabled"
          children={options.map(op => {
            return (
              <DNACheckbox
                {...op}
                key={op.id}
                checked={op.checked}
                onPress={() => {
                  handleSelect(op);
                }}
              />
            );
          })}
        />
      </View>
      <View>
        <DNAButton
          label="Read Docs"
          color="primary"
          size="lg"
          onPress={() => {
            Linking.openURL(WebDocs_URL + 'docs/components/checkbox');
          }}
          icon={<FileIcon size={20} color={'#fff'} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, padding: 30},
  divider: {marginVertical: 20},
});

export default CheckboxGroupScreen;
