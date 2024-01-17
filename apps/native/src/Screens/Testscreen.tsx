import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DNAChip} from '@rndna/chip';
import {DNABadge} from '@rndna/badge';
import {UserIcon} from '@rndna/icon';
import {useColor, getColorTheme } from '@rndna/theme-provider';

const Testscreen: React.FC<any> = () => {
  const theme = getColorTheme();
  const color = useColor();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <View style={[styles.container, bg]}>
        <Text
          style={[
            styles.header,
            {
              color: color.default['700'],
            },
          ]}>
          Native : {useColorScheme()} Mode
        </Text>
        <View style={styles.gap}>
          <DNAChip
            label="Chips"
            size="sm"
            icon={UserIcon}
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNAChip
            label="Chip"
            isClosable
            size="sm"
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNAChip
            label="Chip"
            isClosable
            size="default"
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNAChip
            label="Chip"
            isDisabled
            isClosable
            size="default"
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNAChip
            label="Chip"
            isClosable
            size="md"
            onPress={() => console.log('pressed')}
            onPressClose={() => console.log('closeddd')}
          />
          <DNABadge color="success">
            <DNAChip
              label="Chip"
              color="success"
              size="lg"
              onPress={() => console.log('pressed')}
              onPressClose={() => console.log('closeddd')}
            />
          </DNABadge>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
  gap: {
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Testscreen;
