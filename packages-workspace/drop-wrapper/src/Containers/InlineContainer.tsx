import React, { useCallback, useImperativeHandle } from "react";
import { memo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type InlineContainerProps = {
  open?: boolean;
  closeModal: () => void;
  label?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export type InlineContainerRefProps = {
  handleOpen: () => void;
} | null;

const InlineContainer = React.forwardRef<
  InlineContainerRefProps,
  InlineContainerProps
>(({ open, ...rest }, ref: any) => {
  const svHeight = useSharedValue(0);

  const handleOpen = useCallback(() => {
    svHeight.value = withTiming(300, { duration: 200 });
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
      height: svHeight.value,
    };
  });

  if (!open) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {rest.children}
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
  },
});

export default memo(InlineContainer);
