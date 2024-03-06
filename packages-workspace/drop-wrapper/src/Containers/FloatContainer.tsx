import React, { useCallback, useImperativeHandle } from "react";
import { memo } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  InlineContainerProps,
  InlineContainerRefProps,
} from "./containerTypes";

const FloatContainer = React.forwardRef<
  InlineContainerRefProps,
  InlineContainerProps
>(({ open, closeModal, position, ...rest }, ref: any) => {
  const svHeight = useSharedValue(0);

  const handleOpen = useCallback(() => {
    svHeight.value = withTiming(1, { duration: 200 });
  }, [svHeight]);

  const handleClose = useCallback(() => {
    svHeight.value = withTiming(0, { duration: 200 });
  }, [svHeight]);

  useImperativeHandle<unknown, InlineContainerRefProps>(
    ref,
    () => ({ handleOpen, handleClose }),
    [handleOpen, handleClose]
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: svHeight.value,
    };
  });

  const _getPosition = useCallback(() => {
    if (!position) {
      return {};
    }

    return {
      left: position.left,
      width: position.width,
      ...(position.yPos === "top"
        ? { bottom: position.bottom }
        : { top: position.top }),
    };
  }, [position]);

  if (!open) {
    return null;
  }

  return (
    <Modal visible={open} transparent>
      <View style={styles.modalWrapper}>
        <Pressable
          onPress={() => {
            handleClose();
            closeModal();
          }}
          style={styles.pressable}
        />
        <Animated.View
          style={[styles.container, animatedStyle, _getPosition()]}
        >
          {rest.children}
        </Animated.View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    height: 232,
    width: "100%",
  },
  modalWrapper: {
    flex: 1,
  },
  pressable: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default memo(FloatContainer);
