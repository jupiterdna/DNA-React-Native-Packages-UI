import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useImperativeHandle} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

type BottomSheetProps = {
  children?: React.ReactNode;
  onEnd?: (state: boolean) => void;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
  isOpen: () => boolean;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({children, onEnd}, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);
    const open = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      active.value = destination !== 0;
      translateY.value = withSpring(destination, {damping: 50});
    }, []);

    useEffect(() => {
      scrollTo(-300);
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useDerivedValue(() => {
      if (onEnd) {
        runOnJS(onEnd)(open.value);
      }
    }, []);

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);

    const context = useSharedValue({y: 0});
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = {y: translateY.value};
      })
      .onUpdate(event => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 2) {
          scrollTo(-300);
          open.value = false;
        } else if (translateY.value < -SCREEN_HEIGHT / 2) {
          scrollTo(MAX_TRANSLATE_Y);
          open.value = true;
        }
      });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      //   const borderRadius = interpolate(
      //     translateY.value,
      //     [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      //     [25, 5],
      //     Extrapolate.CLAMP,
      //   );

      return {
        transform: [{translateY: translateY.value}],
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          <View style={styles.line} />
          {children}
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});

export default BottomSheet;
