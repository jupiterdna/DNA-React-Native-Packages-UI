import React, { 
  createElement,
  useCallback, 
  useRef, 
  useState 
} from "react";
import { 
  TouchableOpacity, 
  View, 
  Modal,
  GestureResponderEvent,
} from "react-native";
import { fabSizeCls, styles } from "./styles";
import { DNAText } from "@rndna/text";
import { useColor } from "@rndna/theme-provider";
import { DNAFabProps, DNAFabItemTypes } from "./types";
import { PlusIcon, CloseSmallIcon } from "@rndna/icon";
import Animated, { useSharedValue, withDelay, withTiming } from "react-native-reanimated";


export const DNAFab: React.FC<DNAFabProps> = React.forwardRef(
  (
    {
      size = "md",
      isOpen = false,
      items,
      onPress,
      ...restProps
    }: DNAFabProps,
    ref: React.Ref<TouchableOpacity>,
  ) => {

    const fabRef = useRef<TouchableOpacity>(null)
    const childRef = useRef<View>(null)
    const [position, setPosition] = useState<any>(undefined)
    const [childPosition, setChildPosition] = useState<any>(undefined)
    const [open, setOpen] = useState(isOpen);
    const themeColor = useColor();
    const primaryColor = themeColor["primary"]["default"];
    const defaultColor = themeColor["default"][900];
    const whiteColor = themeColor["default"][100];

    const measure = useCallback((): void => {
      if (fabRef && fabRef.current) {
        fabRef.current.measureInWindow((pageX, pageY, width, height) => {
          setPosition({
            pageX, pageY, width, height
          })
        });
      }
    }, [fabRef, isOpen])

    const _renderAddIcon = useCallback(() => {
      const parentIcon = items ? (!open ? PlusIcon : CloseSmallIcon) : PlusIcon
      return createElement(parentIcon, {
        size: fabSizeCls[size].width - 20,
        color: whiteColor,
      });
    }, [open, position, measure, items, themeColor])

    const measureChild = useCallback((): void => {
      if (childRef && childRef.current) {
        childRef.current.measureInWindow((pageX, pageY, width, height) => {
          setChildPosition({
            pageX, pageY, width, height
          })
        });
      }
    }, [childRef, isOpen])

    const animatedValues = items?.map(() => useSharedValue(0));

    const animateItems = useCallback((): void => {
      items?.forEach((_, index) => {
        const reverseIndex = items.length - index - 1;
        const indexVal = open ? reverseIndex : index;

        animatedValues && (animatedValues[indexVal].value = withDelay(
          index * 200,
          withTiming(open ? 0 : 1, { duration: 200 }) 
        ));
      });
      setOpen(!open);
    }, [open]);

    const handlePress = (event: GestureResponderEvent) => {
      if (items) {
        animateItems()
      } else {
        onPress && onPress(event);
      }
    };

    const _renderChildItems = useCallback((): React.JSX.Element[] | undefined => (
      items &&
      items.map((e: DNAFabItemTypes, index: number) => {
        const { onPress, icon = PlusIcon, title } = e;
        const renderItemIcon =
          typeof icon === "function"
          ? createElement(icon, {
              size: fabSizeCls[size].width - 25,
              color: defaultColor,
            })
          : icon;

        return (
          <Animated.View key={`${icon}_${title}`} style={{ opacity: animatedValues?.[index] }}>
            <View style={styles.row}>
              {title && (
                <DNAText type="overline" style={{ color: whiteColor }}>
                  {title}
                </DNAText>
              )}
              <TouchableOpacity
                onPress={onPress}
                style={[
                  fabSizeCls[size],
                  { backgroundColor: whiteColor },
                  styles.fab,
                ]}>
                {renderItemIcon}
              </TouchableOpacity>
            </View>
          </Animated.View>
        );
      })
    ), [size, items, defaultColor, whiteColor, animatedValues]);

    const _renderModal = useCallback((): React.JSX.Element | null => {
      if (!items) {
        return null;
      }

      return (
        <Modal
          animationType="fade"
          transparent
          visible={open}
          onDismiss={() => setOpen(false)}
          >
          <TouchableOpacity 
            style={styles.modalContainer} 
            onPress={(event) => handlePress(event)}
            >
            <TouchableOpacity
              style={[
                fabSizeCls[size],
                styles.fab,
                {
                  left: position?.pageX,
                  top: position?.pageY,
                  position: 'absolute',
                  backgroundColor: primaryColor,
                  zIndex: 99,
                }
              ]}
              onPress={(event) => handlePress(event)}
            >
                {_renderAddIcon()}
            </TouchableOpacity>
            <View style={[
                styles.childrenStyle,
                {
                  position: 'absolute',
                  left: (position?.pageX + position?.width) - childPosition?.width, 
                  top: position?.pageY - childPosition?.height - styles.childrenStyle.gap,
                }]}>
              {_renderChildItems()}
            </View>
          </TouchableOpacity>
        </Modal>
      )
    }, [open, position, measure, _renderAddIcon, _renderChildItems, size, childPosition])

    const _renderMainFab =  useCallback((): JSX.Element => (
      <View style={{ width: childPosition?.width, alignItems: 'flex-end' }}>
        <TouchableOpacity
          onLayout={measure}
          style={[
            fabSizeCls[size],
            { backgroundColor: primaryColor },
            styles.fab,
          ]}
          onPress={(event) => handlePress(event)}
          {...restProps}
          ref={fabRef}
        >
          {_renderAddIcon()}
        </TouchableOpacity>
      </View>
    ), [size, childPosition, measure, primaryColor, _renderAddIcon]);

    const _renderRefItems = useCallback((): JSX.Element => (
      <View style={styles.childWrapper}>
        <View
            style={[styles.childrenStyle]}
            ref={childRef}
            onLayout={measureChild}
          >
            {_renderChildItems()}
          </View>
      </View>
    ), [measureChild, _renderChildItems]);

    return (
      <>
        {_renderMainFab()}
        {_renderRefItems()}
        {_renderModal()}
      </>
    );
    
  }
);

export default DNAFab;
