import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
  TextStyle,
  useColorScheme,
} from 'react-native';
import React, {
  createElement,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import Animated, {
  Easing,
  ReduceMotion,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useColor, useFonts} from '@rndna/theme-provider';
import _ from 'lodash';
import {CloseIcon} from '@rndna/icon';
import {hasSpecialCharacter, isRequired, maxChar} from './validator';
import {useValidator} from './hooks';
import {TextFieldtypes, colorTypes} from './types';
import {DNAText} from '@rndna/text';
/**
 * default animation config for label / placeholder
 */

/**
 * A TextField is a component of the most generic and common data entry fields used to capture text type data—letters, numbers, and symbols..
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, Text } from 'react-native';
 * import { DNATextfield } from '@rndna/textfield';
 *
 * const ComponentName = () => {
 *
 * const [value, setValue] = useState('')
 * <DNATextfield
 *  value={value}
 *  onChangeText={(text) => {setValue(text)}}
 *  variant='flat' //flat | filled | outlined
 * />
 * }
 *
 * export default ComponentName;
 * ```
 */

export const TextField = forwardRef(
  (
    {
      value,
      onChangeText,
      onChange,
      icon,
      placeholder,
      clearable,
      disabled,
      assistiveText,
      required,
      onBlur,
      onFocus,
      variant = 'flat',
      prefix,
      ...restProps
    }: TextFieldtypes,
    ref: React.Ref<TextInput>,
  ) => {
    const font = useFonts();
    const theme = useColor();
    const scheme = useColorScheme();

    const INITIAL_POSITION = 10;
    const INITIAL_FONTSIZE = font.fontSize?.body2 || 14;
    const ANIM_DURATION = 300;

    const animateConfig = {
      duration: ANIM_DURATION,
      easing: Easing.inOut(Easing.quad),
      reduceMotion: ReduceMotion.System,
    };

    const pos = useSharedValue(INITIAL_POSITION);
    const fontSize = useSharedValue(INITIAL_FONTSIZE);
    const innerRef = useRef<TextInput>(null);

    const [focus, setFocus] = useState(false);
    const [localValue, setLocalValue] = useState('');

    const animatedStyle = useAnimatedStyle(() => ({
      top: withTiming(pos.value, animateConfig),
      fontSize: withTiming(fontSize.value, animateConfig),
    }));

    useImperativeHandle(ref, () => innerRef.current!, []);

    const errors = useValidator<string>({
      param: localValue,
      validators: [isRequired(required), maxChar(6), hasSpecialCharacter()],
    });

    useEffect(() => {
      if (value || focus) {
        pos.value = variant !== 'flat' ? -15 : -7;
        fontSize.value = 12;
      } else {
        pos.value = INITIAL_POSITION;
        fontSize.value = INITIAL_FONTSIZE;
      }
      setLocalValue(value);
    }, [focus, value, variant]);

    const getColor = useCallback(
      (color: colorTypes) => {
        if (!_.isEmpty(errors)) {
          return theme.danger.default;
        }
        switch (color) {
          case 'error':
            return theme.danger.default;
          default:
            return theme[color].default;
        }
      },
      [assistiveText, errors],
    );

    const getBorderStyle = useMemo((): StyleProp<ViewStyle> => {
      const border =
        variant === 'outlined'
          ? {
              borderWidth: 1,
            }
          : {
              borderBottomWidth: 1,
            };
      return variant === 'filled'
        ? {...border, backgroundColor: theme.default[200], borderRadius: 0}
        : border;
    }, [variant, theme, scheme]);

    const fieldStyle = useMemo((): StyleProp<ViewStyle> => {
      if (!_.isEmpty(errors)) {
        return {
          borderColor: getColor('error'),
        };
      }
      if (!_.isEmpty(assistiveText)) {
        return {
          borderColor: getColor(assistiveText.type),
        };
      }
      return focus
        ? {
            borderColor: theme.primary.default,
          }
        : {borderColor: theme.default[500]};
    }, [focus, value, errors]);

    const labelStyle = useMemo((): StyleProp<TextStyle> => {
      if (!_.isEmpty(errors)) {
        return {
          color: getColor('error'),
        };
      }
      if (
        (!_.isEmpty(assistiveText) && focus) ||
        (!_.isEmpty(assistiveText) && value)
      ) {
        return {
          color: getColor(assistiveText.type),
        };
      }
      return focus
        ? {
            color: theme.primary.default,
          }
        : {color: theme.default[500]};
    }, [focus, value, assistiveText, errors]);

    const _resetValue = (): void => {
      if (onChange) {
        onChange('');
      }
      if (onChangeText) {
        onChangeText('');
      }
      innerRef.current?.blur();
    };

    const renderIcon = (type: 'assistive' | 'icon'): React.JSX.Element => {
      const iconColor = !_.isEmpty(errors)
        ? getColor('error')
        : !_.isEmpty(assistiveText)
        ? getColor(assistiveText.type)
        : focus
        ? theme.primary.default
        : theme.default.default;

      const selectedIcon = type === 'assistive' ? assistiveText?.icon : icon;

      return typeof selectedIcon === 'function'
        ? createElement(selectedIcon, {
            size: type === 'assistive' ? 14 : 22,
            color: iconColor,
          })
        : selectedIcon;
    };

    const handleFocus = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocus(true);
        if (onFocus) {
          onFocus(e);
        }
      },
      [onFocus],
    );
    const handleBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocus(false);
        if (onBlur) {
          onBlur(e);
        }
      },
      [onBlur],
    );

    const _renderLabel = useCallback((): React.JSX.Element | null => {
      return (
        <Animated.Text style={[animatedStyle, labelStyle, styles.label]}>
          {placeholder}
        </Animated.Text>
      );
    }, [placeholder, animatedStyle, labelStyle]);

    const _renderLeftActions = useCallback((): React.JSX.Element | null => {
      return clearable ? (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            _resetValue();
          }}>
          <CloseIcon color={theme.default.default} size={18} />
        </TouchableOpacity>
      ) : null;
    }, [clearable, localValue]);

    const _renderAssistiveText = useCallback((): React.JSX.Element | null => {
      if (!_.isEmpty(errors)) {
        return (
          <View style={styles.assistiveTextContainer}>
            {renderIcon('assistive')}
            <Text
              style={[
                {
                  color: getColor('error'),
                },
                styles.assistiveText,
              ]}>
              {errors.message}
            </Text>
          </View>
        );
      }
      if (_.isEmpty(assistiveText)) {
        return null;
      }

      return (
        <View style={styles.assistiveTextContainer}>
          {renderIcon('assistive')}
          <Text
            style={[
              {
                color: getColor(assistiveText.type),
              },
              styles.assistiveText,
            ]}>
            {assistiveText?.message}
          </Text>
        </View>
      );
    }, [assistiveText, errors]);

    const _renderPrefix = (): React.JSX.Element | null => {
      return prefix && (focus || value) ? (
        <DNAText style={styles.prefixStyle}>{prefix}</DNAText>
      ) : null;
    };

    return (
      <View style={styles.container}>
        {renderIcon('icon')}
        <View style={styles.inputContainer}>
          <View style={[styles.textInputContainer, fieldStyle, getBorderStyle]}>
            {_renderPrefix()}
            {_renderLabel()}
            <TextInput
              editable={!disabled}
              ref={innerRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={[
                styles.input,
                {
                  color: theme.default[900],
                },
              ]}
              value={localValue}
              onChangeText={onChangeText ?? onChange}
              {...restProps}
            />
            {_renderLeftActions()}
          </View>
          {_renderAssistiveText()}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  assistiveTextContainer: {
    position: 'absolute',
    bottom: -20,
    fontSize: 12,
    left: 7,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 3,
  },
  assistiveText: {fontSize: 12},
  label: {position: 'absolute', left: 7},
  input: {
    flex: 1,
    height: '100%',
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 10,
    marginBottom: 35,
  },
  prefixStyle: {
    marginRight: 5,
  },
});

export default memo(TextField);
