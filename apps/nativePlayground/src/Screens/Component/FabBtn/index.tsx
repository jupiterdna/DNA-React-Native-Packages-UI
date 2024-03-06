import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  StatusBar,
  Modal,
} from 'react-native';
import Animated, {
  measure,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import _ from 'lodash';

const {height: H, width: W} = Dimensions.get('window');
const statusBarHeight: number = StatusBar.currentHeight || 0;

const FabBtn = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<any>(undefined);
  const [conPosition, setConPosition] = useState<any>(undefined);
  const rootRef = useRef<View>(null);
  const conRef = useRef<View>(null);
  const opacity = useSharedValue(0);

  const handleOpen = useCallback(() => {
    opacity.value = withTiming(1, {duration: 1000});
  }, [opacity]);

  const handleClose = useCallback(() => {
    opacity.value = withTiming(0, {duration: 1000});
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const _measureOptions = useCallback(() => {
    if (conRef && conRef?.current) {
      setTimeout(() => {
        conRef?.current?.measureInWindow((pageX, pageY, width, height) => {
          setConPosition({
            top: Math.floor(pageY),
            left: Math.floor(pageX),
            height: Math.floor(height),
            width: Math.floor(width),
          });
        });
      }, 100);
    }
  }, [conRef, open]);

  const _measure = useCallback(() => {
    if (rootRef && rootRef?.current) {
      rootRef?.current?.measureInWindow((pageX, pageY, width, height) => {
        const bottom = !_.isEmpty(conPosition)
          ? pageY - conPosition.height
          : pageY;
        // const left = I18nManager.isRTL ? W - width - pageX : pageX;
        const left = pageX;

        setPosition({
          top: Math.floor(bottom - statusBarHeight),
          left: Math.floor(left),
        });
      });
    }
  }, [rootRef, conPosition]);

  useEffect(() => {
    _measure();
  }, [conPosition]);

  const pos = useCallback(() => {
    if (position) {
      return {
        top: position.top,
        left: position.left,
      };
    }
  }, [position, conPosition]);

  return (
    <>
      <Pressable
        ref={rootRef}
        onLayout={_measure}
        onPress={() => {
          setOpen(true);
          handleOpen();
        }}
        style={styles.container}>
        <Text style={styles.text}>plus</Text>
      </Pressable>
      <Modal visible={open} transparent>
        <Pressable
          onPress={() => {
            setOpen(false);
            handleClose();
          }}
          style={styles.overlay}
        />
        <Animated.View
          ref={conRef}
          onLayout={_measureOptions}
          style={[styles.options, animatedStyle, pos()]}>
          <Text>Option 1</Text>
          <Text>Option 2</Text>
          <Text>Option 3</Text>
          <Text>Option 3</Text>
          <Text>Option 3</Text>
          <Text>Option 3</Text>
          <Text>Option 3</Text>
          <Text>Option 3</Text>
          <Text>Option 3</Text>
        </Animated.View>
        <Pressable
          onPress={() => {
            setOpen(false);
            handleClose();
          }}
          style={styles.container}>
          <Text style={styles.text}>minus</Text>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
  },
  options: {
    position: 'absolute',
    backgroundColor: 'white',
  },
});

export default FabBtn;
