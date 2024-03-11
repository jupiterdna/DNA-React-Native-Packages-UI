import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useRef} from 'react';
import {Dropdown} from '@rndna/drop-wrapper';
import FabBtn from './Component/FabBtn';

const ControlTestScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#e0e0e0', position: 'relative'}}>
      <FabBtn />
    </View>
  );

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       padding: 16,
  //     }}>
  //     <View style={{marginBottom: 100}} />
  //     <Dropdown.Container ref={ref} label="Country" mode="float">
  //       <Dropdown.Content style={styles.content}>r
  //         <Pressable
  //           onLongPress={() => {
  //             ref.current.openModal();
  //           }}
  //           onPress={() => {
  //             ref.current.openModal();
  //           }}>
  //           <Text>Content</Text>
  //         </Pressable>
  //       </Dropdown.Content>
  //       <Dropdown.Popover>
  //         <View>
  //           <Text>This is popover value</Text>
  //         </View>
  //       </Dropdown.Popover>
  //     </Dropdown.Container>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignSelf: 'flex-end',
  },
});

export default ControlTestScreen;
