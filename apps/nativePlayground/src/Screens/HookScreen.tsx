import {View, Text} from 'react-native';
import React from 'react';
import {useDNAWind} from '@rndna/base_style';
import {DNADivider} from '@rndna/divider';

const HookScreen = () => {
  const dw = useDNAWind();

  // const style = dw('p-4 mt-4 items-center justify-center flex-1');
  // return  {"alignItems": "center", "flexBasis": 0, "flexGrow": 1, "flexShrink": 1, "justifyContent": "center", "marginTop": 16, "paddingBottom": 16, "paddingLeft": 16, "paddingRight": 16, "paddingTop": 16}

  return (
    <View style={dw('p-4')}>
      <DNADivider size="sm" color="danger" variant="solid" />
      <View>
        <Text>xxx</Text>
      </View>

      <View
        style={{
          height: 300,
        }}>
        <DNADivider
          size="sm"
          color="danger"
          orientation="vertical"
          variant="solid"
        />
      </View>
    </View>
  );
};

export default HookScreen;
