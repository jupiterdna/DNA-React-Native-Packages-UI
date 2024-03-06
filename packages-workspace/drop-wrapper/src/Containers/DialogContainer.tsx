import React, { useCallback, useImperativeHandle } from "react";
import { memo } from "react";
import { Dimensions, Modal, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useColor } from "@rndna/theme-provider";
import {
  DialogContainerProps,
  DialogContainerRefProps,
} from "./containerTypes";

const { height } = Dimensions.get("window");

const DialogContainer = React.forwardRef<
  DialogContainerRefProps,
  DialogContainerProps
>(({ open, closeModal, ...rest }, ref: any) => {
  const color = useColor();
  const opacity = useSharedValue(0);

  const handleOpen = useCallback(() => {
    opacity.value = withTiming(1, { duration: 200 });
  }, [opacity]);

  const handleClose = useCallback(() => {
    opacity.value = withTiming(0, { duration: 200 });
  }, [opacity]);

  useImperativeHandle<unknown, DialogContainerRefProps>(
    ref,
    () => ({ handleOpen }),
    [handleOpen]
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: opacity.value }],
    };
  });

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
        <Animated.View style={[styles.animatedContainer, animatedStyle]}>
          {rest.children}
        </Animated.View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  pressable: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
  },
  animatedContainer: {
    backgroundColor: "white",
    minHeight: height * 0.5,
    borderRadius: 30,
    top: 0,
    width: "90%",
    padding: 20,
    paddingVertical: 20,
  },
});

export default memo(DialogContainer);
