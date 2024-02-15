import React, { useState, useRef, FC } from 'react';
import { View, Pressable, Animated, Easing, StyleSheet, LayoutChangeEvent, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
import { pick } from 'lodash';

const radius = 10;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  ripple: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    position: 'absolute',
  },
});

interface Ripple {
  unique: number; // We'll use this as the unique identifier
  progress: Animated.Value;
  locationX: number;
  locationY: number;
  R: number;
}

interface RippleComponentProps {
  onPress?: (event?: GestureResponderEvent) => void;
  onPressIn?: (event?: GestureResponderEvent) => void;
  onPressOut?: () => void;
  onLongPress?: (event?: GestureResponderEvent) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  rippleColor?: string;
  rippleOpacity?: number;
  rippleDuration?: number;
  rippleSize?: number;
  rippleCentered?: boolean;
  rippleSequential?: boolean;
  rippleFades?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  disabled?: boolean;
}

const DEFAULT_PROPS = {
  rippleColor: 'rgb(250, 250, 250)',
  rippleOpacity: 0.5,
  rippleDuration: 400,
  rippleSize: 400,
  rippleCentered: false,
  rippleSequential: false,
  rippleFades: true,
};

const RippleComponent: FC<RippleComponentProps> = ({
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onLayout,
  rippleColor = DEFAULT_PROPS.rippleColor,
  rippleOpacity = DEFAULT_PROPS.rippleOpacity,
  rippleDuration = DEFAULT_PROPS.rippleDuration,
  rippleSize = DEFAULT_PROPS.rippleSize,
  rippleCentered = DEFAULT_PROPS.rippleCentered,
  rippleSequential = DEFAULT_PROPS.rippleSequential,
  rippleFades = DEFAULT_PROPS.rippleFades,
  style,
  contentStyle,
  children,
  disabled = false,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const animationValues = useRef<Animated.Value[]>([]);
  const rippleCounter = useRef<number>(0); 

  const startRipple = (event?: GestureResponderEvent) => {
    const { nativeEvent } = event || {};
    const { locationX, locationY } = nativeEvent || {};
    const w2 = 0.5 * width;
    const h2 = 0.5 * height;
    
    const rippleLocationX = rippleCentered ? w2 : locationX ?? w2;
    const rippleLocationY = rippleCentered ? h2 : locationY ?? h2;
  
    const offsetX = Math.abs(w2 - rippleLocationX);
    const offsetY = Math.abs(h2 - rippleLocationY);
    const R = rippleSize > 0 ? 0.5 * rippleSize : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));
  
    const newRipple: Ripple = {
      unique: rippleCounter.current++, // Assign unique identifier
      progress: new Animated.Value(0),
      locationX: rippleLocationX,
      locationY: rippleLocationY,
      R,
    };
  
    const animation = Animated.timing(newRipple.progress, {
      toValue: 1,
      easing: Easing.out(Easing.ease),
      duration: rippleDuration,
      useNativeDriver: true,
    });
  
    animation.start(({ finished }) => {
      if (finished) {
        setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.unique !== newRipple.unique));
      }
    });
  
    // Add the Animated.Value to the animationValues array
    animationValues.current[newRipple.unique] = newRipple.progress;
  
    // Add the new ripple to the ripples array
    if (rippleSequential) {
      // If sequential, start only the latest ripple
      setRipples([newRipple]);
    } else {
      // If not sequential, add the ripple to the existing ripples
      setRipples((prevRipples) => [...prevRipples, newRipple]);
    }
  };

  const renderRipple = ({ unique, progress, locationX, locationY, R }: Ripple) => {
    const rippleStyle = {
      top: locationY - radius,
      left: locationX - radius,
      width: radius * 2,
      height: radius * 2,
      borderRadius: radius,
      backgroundColor: rippleColor,
      opacity: rippleFades ? progress.interpolate({ inputRange: [0, 1], outputRange: [rippleOpacity, 0] }) : rippleOpacity,
      transform: [{ scale: progress.interpolate({ inputRange: [0, 1], outputRange: [0.5 / radius, R / radius] }) }],
    };

    return <Animated.View style={[styles.ripple, rippleStyle]} key={unique} />;
  };

  const handlePress = () => {
    onPress && onPress();
  };

  const handleLongPress = (event?: GestureResponderEvent) => {
    onLongPress && onLongPress(event);
    startRipple(event);
  };

  const handlePressIn = (event?: GestureResponderEvent) => {
    onPressIn && onPressIn(event);
    startRipple(event);
  };

  const handlePressOut = () => {
    onPressOut && onPressOut();
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setWidth(width);
    setHeight(height);
    onLayout && onLayout(event);
  };

  return (
    <Pressable
      onPress={handlePress}
      onLongPress={handleLongPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLayout={handleLayout}
      style={style}
      disabled={disabled}
    >
      <Animated.View style={contentStyle} pointerEvents="box-only">
        {children}
        <View style={[styles.container, pick(StyleSheet.flatten(style), ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'])]}>
          {ripples.map(renderRipple)}
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default RippleComponent;
