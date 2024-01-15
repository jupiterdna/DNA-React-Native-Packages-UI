import React, { createElement } from "react";
import { TextInput, Text, View } from "react-native";
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
    { label, value, icon, ...restProps }: DNATextfieldProps,
    ref: React.Ref<TextInput>
  ) => {

    const renderIcon =
      typeof icon === "function"
        ? createElement(icon, {
            size: 24,
            color: "red",
          })
        : icon;

    return (
      <View>
        {renderIcon}
        <TextInput ref={ref} {...restProps} />
      </View>
    );
  }
);
