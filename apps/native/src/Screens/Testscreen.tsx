import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {Chip} from '@dnamobile/chip';
import {DNAButton} from '@rndna/button';
import {Collapsible} from '@dnamobile/collapsible';
import {AgeIcon} from '@rndna/icon';
import {Badge} from '@dnamobile/badge';
import {useColor} from '@rndna/theme-provider';

const Testscreen = () => {
 
  const color = useColor();

  return (
    <View style={{flex: 1}}>
      <View style={[styles.container]}>
        <Text style={styles.header}>Native</Text>
        <Chip
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
        </Badge>
      </View>
    </View>
  );
};

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

export default Testscreen;
