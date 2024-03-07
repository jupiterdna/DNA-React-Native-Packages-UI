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
  Dimensions,
  Pressable,
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
      inDrawer = true,
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
    const animatedValues = items?.map(() => useSharedValue(0));
    const ANIM_DURATION = 200;

  /**
   * This function 'measure' is a memoized callback that measures the dimensions and position of the 'fabRef' current element in the window.
   * These values are then used to update the 'position' state.
   * This function is useful when you need to know the exact position and size of an element in the window.
   * 
   * It only re-computes when 'fabRef' or 'isOpen' changes.
   * 
   * @returns void
   */
    const measure = useCallback((): void => {
      if (fabRef && fabRef.current) {
        fabRef.current.measureInWindow((pageX, pageY, width, height) => {
          setPosition({
            pageX,
            pageY,
            width,
            height
          })
        });
      }
    }, [fabRef, isOpen])

  /**
   * This function 'measureChild' is a memoized callback that measures the dimensions and position of the 'childRef' current element in the window.
   * These values are then used to update the 'position' state.
   * This function is useful when you need to know the exact position and size of an element in the window.
   * 
   * It only re-computes when 'childRef' or 'isOpen' changes.
   * 
   * @returns void
   */
    const measureChild = useCallback((): void => {
      if (childRef && childRef.current) {
        childRef.current.measureInWindow((pageX, pageY, width, height) => {
          setChildPosition({
            pageX,
            pageY,
            width,
            height,
          })
        });
      }
    }, [childRef, isOpen])

    /**
   * This function '_renderAddIcon' is a memoized callback that returns a JSX element.
   * The icon's size and color are also set within this function.
   * 
   * @returns A JSX element representing the icon, or null if the conditions for rendering the icon are not met.
   */
    const _renderAddIcon = useCallback((): React.JSX.Element | null => {
      const parentIcon = items ? (!open ? PlusIcon : CloseSmallIcon) : PlusIcon
      return createElement(parentIcon, {
        size: fabSizeCls[size].width - 20,
        color: whiteColor,
      });
    }, [open, position, measure, items, themeColor])

    /**
     * This function 'animateItems' is a memoized callback that animates the items in the Floating Action Button (FAB) menu.
     * It iterates over each item and applies an animation with a delay based on the item's index.
     * The animation and delay are reversed when the menu is closing.
     * This function is useful for creating a staggered animation effect where each item in the menu animates in sequence rather than all at once.
     *
     * @returns void
     */
    const animateItems = useCallback((): void => {
      items?.forEach((_, index) => {
        const reverseIndex = items.length - index - 1;
        const indexVal = open ? reverseIndex : index;

        animatedValues && (animatedValues[indexVal].value = withDelay(
          index * ANIM_DURATION,
          withTiming(open ? 0 : 1, { duration: ANIM_DURATION }) 
        ));
      });
    }, [open]);

    /**
     * This function '_renderChildItems' is a memoized callback that returns an array of JSX elements or undefined.
     * It's used to map over the 'items' array and create a JSX element for each item.
     * This function is useful for rendering a list of items with optional icons and titles, and applying animations to them.
     * 
     * @returns An array of JSX elements representing the items, or undefined if 'items' is not defined.
     */
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
              {title ? (
                <DNAText type="overline" style={{ color: whiteColor }}>
                  {title}
                </DNAText>
              ): null}
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
    
    /**
     * This function '_renderMainFab' is a memoized callback that returns a JSX element or null.
     * It's used to render the main Floating Action Button (FAB) with an icon that changes based on the state of the menu.
     * 
     * @returns A JSX element representing the main FAB, or null if 'childPosition' is not defined.
     */
    const _renderMainFab =  useCallback((): React.JSX.Element | null => (
      <View style={{ width: childPosition?.width, alignItems: 'flex-end'}}>
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
    
    /**
     * This function '_renderRefItems' is a memoized callback that returns a JSX element or null.
     * styles.childWrapper is used to position the child items off-screen initially.
     * The wrapper view also has a 'ref' and an 'onLayout' prop to measure its layout.
     * 
     * @returns A JSX element representing the wrapper view and child items, or null if 'measureChild' or '_renderChildItems' are not defined.
     */
    const _renderRefItems = useCallback((): React.JSX.Element | null => (
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
    
    /**
     * This function '_renderModal' is a memoized callback that returns a JSX element or null.
     * The main FAB and child items are positioned absolutely within the modal based on the 'position' and 'childPosition' states.
     * 
     * @returns A JSX element representing the modal, or null if 'items' is not defined.
     */
    const _renderModal = useCallback((): React.JSX.Element | null => {
      if (!items) {
        return null;
      }

      const windowWidth = Dimensions.get('window').width;
      const drawerWidth = inDrawer ? windowWidth * 0.7125 : 0; // 71.25% of the window width for the drawer (Subject to Change)
      const fabWidth = fabSizeCls[size].width;
      const rightValue = windowWidth - position?.pageX - fabWidth + drawerWidth

      return (
        <Modal
          animationType="fade"
          transparent
          visible={open}
          onDismiss={() => setOpen(false)}
        >
          <Pressable
            style={styles.modalContainer}
            onPress={(event) => handlePress(event)}
          />
          <TouchableOpacity
            style={[
              fabSizeCls[size],
              styles.fab,
              {
                position: 'absolute',
                right: rightValue,
                top: position?.pageY,
                backgroundColor: primaryColor,
                zIndex: 99,
              },
            ]}
            onPress={(event) => handlePress(event)}
          >
            {_renderAddIcon()}
          </TouchableOpacity>
          <View
            style={[
              styles.childrenStyle,
              {
                position: 'absolute',
                right: rightValue,
                top: position?.pageY - childPosition?.height - styles.childrenStyle.gap,
              },
            ]}
          >
            {_renderChildItems()}
          </View>
        </Modal>
      );
    }, [open, position, measure, _renderAddIcon, _renderChildItems, size, childPosition])

   /**
     * This function 'handlePress' is an event handler for the 'onPress' event of the Floating Action Button (FAB).
     * If there are items, it calls the 'animateItems' function to animate the child items.
     * If the FAB is currently open, it calculates a delay based on the number of items and the animation duration, 
     * and then uses this delay to close the FAB after all the child items have finished animating.
     * If the FAB is not open, it opens the FAB immediately.
     * If there are no child items, it calls the 'onPress' prop function, if it exists, and passes the event object to it.
     * 
     * This function is useful for handling the press event of the FAB and performing different actions based on whether the FAB has child items or not, 
     * and whether the FAB is currently open or not.
     * 
     * @param event - The event object from the 'onPress' event.
     */
    const handlePress = (event: GestureResponderEvent) => {
      if (items) {
        animateItems();
        if (open) {
          const totalDelay = items.length * ANIM_DURATION; 
          setTimeout(() => {
            setOpen(false);
          }, totalDelay);
        } 
        return setOpen(true);
      } 
      return onPress && onPress(event);
    };

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
