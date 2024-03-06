import React, { useCallback, useImperativeHandle } from "react";
import { memo } from "react";
import { Dimensions, Modal, Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { styles } from "../style";
import { useColor, useFonts } from "@rndna/theme-provider";
import { BlockContainerProps, BlockContainerRefProps } from "./containerTypes";
import { DNAText } from "@rndna/text";

const { height } = Dimensions.get("window");

const BlockContainer = React.forwardRef<
  BlockContainerRefProps,
  BlockContainerProps
>(({ open, closeModal, label, ...rest }, ref: any) => {
  const color = useColor();
  const fonts = useFonts();
  const fadeAnim = useSharedValue(0);
  const opacity = useSharedValue(0);

  const size = fonts.fontSize;

  const headerStyle = {
    fontSize: size?.h6,
    color: color.default[700],
  };

  const handleOpen = useCallback(() => {
    fadeAnim.value = withTiming(height * 0.9, { duration: 200 });
    opacity.value = withTiming(1, { duration: 200 });
  }, []);

  const handleClose = useCallback(() => {
    fadeAnim.value = withTiming(0, { duration: 200 });
    opacity.value = withTiming(0, { duration: 200 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: fadeAnim.value,
      opacity: opacity.value,
    };
  });

  useImperativeHandle<unknown, BlockContainerRefProps>(
    ref,
    () => ({ handleOpen }),
    [handleOpen]
  );

  return (
    <Modal visible={open} transparent>
      <Pressable
        style={styles.modalWrapper}
        onPress={() => {
          handleClose();
          closeModal();
        }}
      />
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        {rest.children}
      </Animated.View>
    </Modal>
  );
});

export default memo(BlockContainer);
