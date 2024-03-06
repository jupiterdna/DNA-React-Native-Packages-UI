import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useRef} from 'react';
import {Dropdown} from '@rndna/drop-wrapper';

const ControlTestScreen = () => {
  const ref = useRef<any>(null);

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}>
      <View style={{marginBottom: 100}} />
      <Dropdown.Container ref={ref} label="Country" mode="block">
        <Dropdown.Content style={styles.content}>
          <Pressable
            onLongPress={() => {
              ref.current.openModal();
            }}
            onPress={() => {
              ref.current.openModal();
            }}>
            <Text>Content</Text>
          </Pressable>
        </Dropdown.Content>
        <Dropdown.Popover>
          <View>
            <Text>This is popover value</Text>
          </View>
        </Dropdown.Popover>
      </Dropdown.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignSelf: 'flex-end',
  },
});

export default ControlTestScreen;
