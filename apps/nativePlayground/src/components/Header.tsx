import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import img from '../../assets/images/logo.png';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DNAText} from '@rndna/text';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.mainContainer}>
        <Image
          source={img}
          resizeMode="cover"
          style={{
            width: 70,
            height: 70,
          }}
        />
        <DNAText>DNA React Native</DNAText>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomDrawerContent;
