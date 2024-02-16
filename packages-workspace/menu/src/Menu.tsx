import _ from "lodash";
import React, {
  JSXElementConstructor,
  ReactElement,
  createElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Dimensions,
  FlatList,
  Keyboard,
  KeyboardEvent,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  StatusBar,
} from "react-native";
import { useDetectDevice } from "./utils/utils";
import { useDeviceOrientation } from "./utils/useOrientation";
import { DropdownProps } from "./types";
import { styles } from "./styles";
import { MenuKebabIcon } from "@rndna/icon";
import { DNAText } from "@rndna/text";
import { textSizeCls } from "./styles";
import { useColor } from "@rndna/theme-provider";

const { isTablet } = useDetectDevice;
const statusBarHeight: number = StatusBar.currentHeight || 0;

// @ts-ignore
const MenuComponent: <T>(
  props: DropdownProps<T>
) => ReactElement<any, string | JSXElementConstructor<any>> | null =
  React.forwardRef((props, currentRef) => {
    const orientation = useDeviceOrientation();
    const {
      testID,
      itemTestIDField,
      onChange,
      style = {},
      containerStyle,
      itemContainerStyle,
      itemTextStyle,
      data = [],
      labelField,
      valueField,
      dropDownMaxWidth = 280,
      value,
      color = "default",
      size = "md",
      icon = MenuKebabIcon,
      maxHeight = 340,
      minHeight = 0,
      disable = false,
      keyboardAvoiding = true,
      inverted = true,
      renderItem,
      autoScroll = true,
      dropdownPosition = "auto",
      flatListProps,
      accessibilityLabel,
      itemAccessibilityLabelField,
      mode = "default",
    } = props;

    const ref = useRef<View>(null);
    const refList = useRef<FlatList>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [currentValue, setCurrentValue] = useState<any>(null);
    const [listData, setListData] = useState<any[]>(data);
    const [position, setPosition] = useState<any>();
    const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

    const { width: W, height: H } = Dimensions.get("window");
    const styleContainerVertical: ViewStyle = useMemo(() => {
      return {
        backgroundColor: "rgba(0,0,0,0.1)",
        alignItems: "center",
      };
    }, []);
    const styleHorizontal: ViewStyle = useMemo(() => {
      return {
        width: orientation === "LANDSCAPE" ? W / 2 : "100%",
        alignSelf: "center",
      };
    }, [W, orientation]);

    const themeColor = useColor();
    const defaultTextColor = themeColor[color]["default"];
    const defaultBgColor = themeColor[color]["50"];
    const activeColor = themeColor[color]["default"];
    const activeTextColor = themeColor[color]["50"];

    useImperativeHandle(currentRef, () => {
      return { open: eventOpen, close: eventClose };
    });

    useEffect(() => {
      return eventClose;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      setListData([...data]);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const renderIcon = useCallback(() => {
      return typeof icon === "function"
        ? createElement(icon, {
            size: (textSizeCls[size].fontSize || -1) + 7,
            color: defaultTextColor,
          })
        : icon;
    }, [icon]);

    const eventOpen = () => {
      if (!disable) {
        setVisible(true);

        scrollIndex();
      }
    };

    const eventClose = useCallback(() => {
      if (!disable) {
        setVisible(false);
        // if (onBlur) {
        //   onBlur();
        // }
      }
    }, [disable]);

    /**
     * Measures the position and dimensions of the menu component.
     * The function calculates the position of the menu based on the provided parameters.
     * It takes into account the device orientation, mode, and screen dimensions.
     * The resulting position is stored in the state variable 'position'.
     */
    const _measure = useCallback(() => {
      if (ref && ref?.current) {
        ref.current.measureInWindow((pageX, pageY, width, height) => {
          let isFull = isTablet
            ? false
            : mode === "modal" || orientation === "LANDSCAPE";

          if (mode === "auto") {
            isFull = false;
          }

          const top = isFull ? 20 : height + pageY + 2;
          const bottom = H - top + height;
          const left =
            pageX + width + 20 >= W ? pageX + width - dropDownMaxWidth : pageX;

          setPosition({
            isFull,
            width: Math.floor(width),
            top: Math.floor(top + statusBarHeight),
            bottom: Math.floor(bottom - statusBarHeight),
            left: Math.floor(left),
            height: Math.floor(height),
          });
        });
      }
    }, [H, W, orientation, mode, dropDownMaxWidth]);

    const onKeyboardDidShow = useCallback(
      (e: KeyboardEvent) => {
        _measure();
        setKeyboardHeight(e.endCoordinates.height);
      },
      [_measure]
    );

    const onKeyboardDidHide = useCallback(() => {
      setKeyboardHeight(0);
      _measure();
    }, [_measure]);

    useEffect(() => {
      const susbcriptionKeyboardDidShow = Keyboard.addListener(
        "keyboardDidShow",
        onKeyboardDidShow
      );
      const susbcriptionKeyboardDidHide = Keyboard.addListener(
        "keyboardDidHide",
        onKeyboardDidHide
      );

      return () => {
        if (typeof susbcriptionKeyboardDidShow?.remove === "function") {
          susbcriptionKeyboardDidShow.remove();
        }

        if (typeof susbcriptionKeyboardDidHide?.remove === "function") {
          susbcriptionKeyboardDidHide.remove();
        }
      };
    }, [onKeyboardDidHide, onKeyboardDidShow]);

    const getValue = useCallback(() => {
      const defaultValue =
        typeof value === "object" ? _.get(value, valueField) : value;

      const getItem = data.filter((e) =>
        _.isEqual(defaultValue, _.get(e, valueField))
      );

      if (getItem.length > 0) {
        setCurrentValue(getItem[0]);
      } else {
        setCurrentValue(null);
      }
    }, [data, value, valueField]);

    useEffect(() => {
      getValue();
    }, [value, data, getValue]);

    /**
     * This function is responsible for scrolling to the selected index in the dropdown list.
     * It checks if autoScroll is enabled, the data is not empty, and the listData is fully loaded.
     * If these conditions are met, it waits for a brief delay and then scrolls to the index of the selected value.
     * The selected value is determined based on the value and valueField properties.
     *
     * @returns void
     */
    const scrollIndex = useCallback(() => {
      if (autoScroll && data.length > 0 && listData.length === data.length) {
        setTimeout(() => {
          if (refList && refList?.current) {
            const defaultValue =
              typeof value === "object" ? _.get(value, valueField) : value;

            const index = _.findIndex(listData, (e: any) =>
              _.isEqual(defaultValue, _.get(e, valueField))
            );
            if (index > -1 && index <= listData.length - 1) {
              refList?.current?.scrollToIndex({
                index: index,
                animated: false,
              });
            }
          }
        }, 200);
      }
    }, [autoScroll, data.length, listData, value, valueField]);

    const showOrClose = useCallback(() => {
      if (!disable) {
        if (keyboardHeight > 0 && visible) {
          return Keyboard.dismiss();
        }

        _measure();
        setVisible(!visible);
        setListData(data);
        scrollIndex();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disable, keyboardHeight, visible, _measure, data, scrollIndex]);

    const onSelect = useCallback(
      (item: any) => {
        setCurrentValue(item);
        onChange(item);
        eventClose();
      },
      [eventClose, onChange]
    );

    const _renderDropdown = () => {
      const isSelected = currentValue && _.get(currentValue, valueField);
      return (
        <TouchableWithoutFeedback
          testID={testID}
          accessible={!!accessibilityLabel}
          accessibilityLabel={accessibilityLabel}
          onPress={showOrClose}
        >
          <View style={styles.dropdown}>
            <DNAText style={{ width: 0, height: 0 }}></DNAText>
            {renderIcon()}
          </View>
        </TouchableWithoutFeedback>
      );
    };

    const _renderItem = useCallback(
      ({ item, index }: { item: any; index: number }) => {
        const isSelected = currentValue && _.get(currentValue, valueField);
        const selected = _.isEqual(_.get(item, valueField), isSelected);
        _.assign(item, { _index: index });
        return (
          <TouchableHighlight
            key={index.toString()}
            testID={_.get(item, itemTestIDField || labelField)}
            accessible={!!accessibilityLabel}
            accessibilityLabel={_.get(
              item,
              itemAccessibilityLabelField || labelField
            )}
            underlayColor={activeColor}
            onPress={() => onSelect(item)}
          >
            <View
              style={StyleSheet.flatten([
                itemContainerStyle,
                selected
                  ? {
                      backgroundColor: activeColor,
                    }
                  : {
                      backgroundColor: defaultBgColor,
                    },
              ])}
            >
              {renderItem ? (
                renderItem(item, selected)
              ) : (
                <View style={styles.item}>
                  <DNAText
                    style={StyleSheet.flatten([
                      styles.textItem,
                      itemTextStyle,
                      {
                        color: selected ? activeTextColor : defaultTextColor,
                      },
                    ])}
                  >
                    {_.get(item, labelField)}
                  </DNAText>
                </View>
              )}
            </View>
          </TouchableHighlight>
        );
      },
      [
        accessibilityLabel,
        currentValue,
        itemAccessibilityLabelField,
        itemContainerStyle,
        itemTestIDField,
        itemTextStyle,
        labelField,
        onSelect,
        renderItem,
        valueField,
      ]
    );

    const renderSearch = useCallback(() => {
      return null;
    }, [accessibilityLabel, testID]);

    const _renderList = useCallback(
      (isTopPosition: boolean) => {
        const isInverted = !inverted ? false : isTopPosition;

        const _renderListHelper = () => {
          return (
            <FlatList
              testID={testID + " flatlist"}
              accessibilityLabel={accessibilityLabel + " flatlist"}
              {...flatListProps}
              keyboardShouldPersistTaps="handled"
              ref={refList}
              onScrollToIndexFailed={scrollIndex}
              data={listData}
              inverted={isTopPosition ? inverted : false}
              renderItem={_renderItem}
              keyExtractor={(_item, index) => index.toString()}
              // showsVerticalScrollIndicator={showsVerticalScrollIndicator}
            />
          );
        };

        return (
          <TouchableWithoutFeedback>
            <View style={styles.flexShrink}>
              {isInverted && _renderListHelper()}
              {renderSearch()}
              {!isInverted && _renderListHelper()}
            </View>
          </TouchableWithoutFeedback>
        );
      },
      [
        _renderItem,
        accessibilityLabel,
        flatListProps,
        listData,
        inverted,
        renderSearch,
        scrollIndex,
        // showsVerticalScrollIndicator,
        testID,
      ]
    );

    const _renderModal = useCallback(() => {
      if (visible && position) {
        const { isFull, width, height, top, bottom, left } = position;

        const onAutoPosition = () => {
          if (keyboardHeight > 0) {
            return bottom < keyboardHeight + height;
          }

          // return bottom < (search ? 150 : 100);
          return bottom < 100;
        };

        if (width && top && bottom) {
          const styleVertical: ViewStyle = {
            left: left,
            maxHeight: maxHeight,
            minHeight: minHeight,
          };
          const isTopPosition =
            dropdownPosition === "auto"
              ? onAutoPosition()
              : dropdownPosition === "top";

          let keyboardStyle: ViewStyle = {};

          let extendHeight = !isTopPosition ? top : bottom;
          if (
            keyboardAvoiding &&
            keyboardHeight > 0 &&
            isTopPosition &&
            dropdownPosition === "auto"
          ) {
            extendHeight = keyboardHeight;
          }

          return (
            <Modal
              transparent
              statusBarTranslucent
              visible={visible}
              supportedOrientations={["landscape", "portrait"]}
              onRequestClose={showOrClose}
            >
              <TouchableWithoutFeedback onPress={showOrClose}>
                <View
                  style={StyleSheet.flatten([
                    styles.flex1,
                    isFull && styleContainerVertical,
                    // backgroundColor && { backgroundColor: backgroundColor },
                    keyboardStyle,
                  ])}
                >
                  <View
                    style={StyleSheet.flatten([
                      styles.flex1,
                      !isTopPosition
                        ? { paddingTop: extendHeight }
                        : {
                            justifyContent: "flex-end",
                            paddingBottom: extendHeight,
                          },
                      isFull && styles.fullScreen,
                    ])}
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.container,
                        isFull ? styleHorizontal : styleVertical,
                        containerStyle,
                        {
                          backgroundColor: defaultBgColor,
                          overflow: "hidden",
                          borderRadius: 15,
                          maxWidth: dropDownMaxWidth,
                        },
                      ])}
                    >
                      {_renderList(isTopPosition)}
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          );
        }
        return null;
      }
      return null;
    }, [
      visible,
      position,
      keyboardHeight,
      maxHeight,
      minHeight,
      dropdownPosition,
      keyboardAvoiding,
      showOrClose,
      styleContainerVertical,
      // backgroundColor,
      containerStyle,
      styleHorizontal,
      _renderList,
    ]);

    // Return the main view with dropdown and modal components
    return (
      <View
        style={StyleSheet.flatten([styles.mainWrap, style])}
        ref={ref}
        onLayout={_measure}
      >
        {_renderDropdown()}
        {_renderModal()}
      </View>
    );
  });

export default MenuComponent;
