import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Chip} from '@dnamobile/chip';
import {DNAButton} from '@rndna/button';
import {Collapsible} from '@dnamobile/collapsible';
import {Badge} from '@dnamobile/badge';

import {AgeIcon} from '@rndna/icon/';
import {DNATextfield} from '@rndna/textfield/';

const Native = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>Native</Text>
      <DNATextfield value="test" icon={<AgeIcon size={30}/>} />
      {/* <Chip
        label="Chip"
        isClosable
        size="default"
        onPress={() => console.log('pressed')}
        onPressClose={() => console.log('closeddd')}
      />
      <DNAButton label="Button" color="info" />
      <Collapsible title="Collapsible Title">
        <AgeIcon size={50} color={'red'} />

        <View>
          <Text>Sample Children: Lorem ipsum dolor sit amet</Text>
        </View>
      </Collapsible>
      <Badge>
        <DNAButton label="Button" color="info" />
      </Badge> */}
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
