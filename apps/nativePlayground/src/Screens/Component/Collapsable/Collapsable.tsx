import {View, Pressable, StyleSheet, ViewStyle} from 'react-native';
import React, {forwardRef, useCallback} from 'react';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ChevronDownIcon} from '@rndna/icon';
import {DNACollapsibleProps} from './types';
import {useColor} from '@rndna/theme-provider';
import {DNAText} from '@rndna/text';

const Collapsable: React.FC<DNACollapsibleProps> = forwardRef<
  View,
  DNACollapsibleProps
>(({title, color, isOpen, isDisabled, children, ...rest}, ref) => {
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  const theme = useColor();
  const themeColor = theme[color || 'primary'].default;

  const bgColor: ViewStyle = {
    backgroundColor: themeColor,
  };

  const handleOpen = useCallback(() => {
    if (isOpen !== undefined) {
      return;
    }
    if (height.value === 100) {
      height.value = withTiming(0, {duration: 200});
      opacity.value = withTiming(0, {duration: 200});
      return;
    }
    height.value = withTiming(100, {duration: 200});
    opacity.value = withTiming(1, {duration: 200});
  }, []);

  const rotateValue = useDerivedValue(() => {
    if (height.value) {
      return `${180}deg`;
    }
    return `${0}deg`;
  });

  const radiusValue = useDerivedValue(() => {
    return height.value ? 0 : 7;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      minHeight: height.value,
      opacity: opacity.value,
    };
  });
  const containerStyle = useAnimatedStyle(() => {
    return {
      borderBottomRightRadius: radiusValue.value,
      borderBottomLeftRadius: radiusValue.value,
    };
  });

  const animatedIcon = useAnimatedStyle(() => {
    return {
      transform: [{rotate: rotateValue.value}],
    };
  });

  const _renderIcon = () => {
    return (
      <Animated.View style={animatedIcon}>
        <ChevronDownIcon size={20} color="#fff" />
      </Animated.View>
    );
  };

  return (
    <View ref={ref}>
      <Animated.View style={[bgColor, containerStyle, style.container]}>
        <Pressable
          style={style.header}
          disabled={isDisabled}
          onPress={() => {
            handleOpen();
          }}>
          <DNAText style={style.headerText}>{title}</DNAText>
          {_renderIcon()}
        </Pressable>
      </Animated.View>
      <Animated.View style={[style.inner, animatedStyle]}>
        {children}
      </Animated.View>
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    borderTopEndRadius: 7,
    borderTopStartRadius: 7,
  },
  inner: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#c1c0c0',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Collapsable;
