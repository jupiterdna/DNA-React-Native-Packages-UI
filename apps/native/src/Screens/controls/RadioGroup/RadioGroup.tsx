import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {Children, forwardRef, useEffect, useMemo} from 'react';
import {RadioGroupTypes} from './types';
import {DNAText} from '@rndna/text';

const RadioGroup: React.FC<RadioGroupTypes> = forwardRef(
  (
    {children, assistiveText, disabled, label, orientation, required, ...rest},
    ref: React.Ref<View>,
  ) => {
    useEffect(() => {
      const childs = Children.map(children, c => {
        return c?.type?.displayName;
      })?.find(f => f !== 'DNARadioButton');

      if (childs) {
        throw new Error(
          'RadioGroup component only accepts radio button components!',
        );
      }
    }, [children]);

    const getContainerStyle = useMemo((): StyleProp<ViewStyle> => {
      return orientation === 'horizontal'
        ? {flexDirection: 'row', columnGap: 10}
        : {flexDirection: 'column', rowGap: 10};
    }, [orientation]);

    return (
      <View ref={ref} style={[styles.container, getContainerStyle]} {...rest}>
        {children}
      </View>
    );
  },
);
// const RadioGroup: React.FC<RadioGroupTypes> = forwardRef(({children}, ref: React.Ref<View>)) => {
//   return ;

//   return <View>{children}</View>;
// };

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
});

export default RadioGroup;
