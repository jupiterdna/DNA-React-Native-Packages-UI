import React from "react";
import {
  TouchableOpacity,
  Text,
} from "react-native";
import { styles } from './styles';
import { ComponentTypes } from './types';

/**
 * A component to show content inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Text } from 'react-native-paper';
 *
 * const ComponentName = () => (
 *  <ComponentName 
 *    label="Hello" 
 *    onEvent={(evt: GestureResponderEvent | undefined) => {
 *      console.log("event", evt)
 *    }}
 *    value={`This is value`}
 *  />
 * );
 *
 * export default ComponentName;
 * ```
 */

export const ComponentName:React.FC<ComponentTypes> = React.forwardRef(
  (
    {
      label,
      value,
      onEvent,
      ...restProps
    }: ComponentTypes,
    ref: React.Ref<TouchableOpacity>,
  ) => {

  return (
    <TouchableOpacity
      style={[
        styles.button,
      ]}
      onPress={onEvent}
      ref={ref}
      {...restProps}
    > 
       <Text>{label}</Text>
    </TouchableOpacity>
  );
});


