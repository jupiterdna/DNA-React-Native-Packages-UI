import React from "react";
import { TextInput, Text } from "react-native";
import { styles } from "./styles";
import { DNATextfieldProps } from "./types";

/**
 * A component to show content inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNATextfield } from '@rndna/textfield';
 *
 * const ComponentName = () => (
 *  <DNATextfield
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

export const DNATextfield: React.FC<DNATextfieldProps> = React.forwardRef(
  (
    { label, value, ...restProps }: DNATextfieldProps,
    ref: React.Ref<TextInput>
  ) => {
    return <TextInput ref={ref} {...restProps} />;
  }
);
