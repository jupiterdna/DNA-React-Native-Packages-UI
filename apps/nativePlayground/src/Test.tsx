import React from 'react';
import {TextInputProps, TextInput, View, Text} from 'react-native';

export type ITextInputProps = TextInputProps & {
  textColor?: string;
  /**
   * Color of the ripple effect.
   */
  color?: string;
  /**
   * Custom button's background color.
   */
  labelText?: string;
  /**
   * Use a compact look, useful for `text` buttons in a row.
   */
};

const TextInputStd: React.FC<ITextInputProps> = React.forwardRef(
  (
    {labelText, ...textInputProps}: ITextInputProps,
    ref: React.Ref<TextInput>,
  ) => {
    return (
      <>
        <View>
          <Text>{labelText || ''}</Text>
          <View>
            <TextInput {...textInputProps} ref={ref} />
          </View>
        </View>
      </>
    );
  },
);

export default TextInputStd;
