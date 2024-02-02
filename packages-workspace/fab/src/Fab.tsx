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
  MeasureOnSuccessCallback, 
} from "react-native";
import { fabSizeCls, styles } from "./styles";
import { DNAText } from "@rndna/text";
import { useColor } from "@rndna/theme-provider";
import { DNAFabProps, DNAFabItemTypes } from "./types";
import { PlusIcon, CloseSmallIcon } from "@rndna/icon";


/**
 * An avatar group displays a number of avatars grouped together in a stack
 *
 * 
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAFab, DNAFabItemTypes } from '@rndna/fab';
 * import { ShareIconOutline, CameraIconOutline, PencilRenameIconOutline } from '@rndna/icon';
 * 
 * // Sample Data
 * const FabItems: DNAFabItemTypes[] = [
 *   {
 *     icon: ShareIconOutline,
 *     title: 'Write',
 *     onPress: () => {
 *       console.log('Clicked Write');
 *     },
 *   },
 *   {
 *     icon: CameraIconOutline,
 *     title: 'Camera',
 *     onPress: () => {
 *       console.log('Clicked Camera');
 *     },
 *   },
 *   {
 *     icon: PencilRenameIconOutline,
 *     title: 'Share',
 *     onPress: () => {
 *       console.log('Clicked Share');
 *     },
 *   },
 * ];
 * 
 * const MyComponent = () => (
 *  <DNAFab
 *    items={FabItems}
 *    onPress={() => {
 *      //Will only execute if there are no items
 *      console.log('Pressed Fab');
 *    }}
 *  />
 * );
 *
 * export default MyComponent;
 * ```
 */

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

    const measure = useCallback(() => {
      if (fabRef && fabRef?.current) {
        fabRef.current.measureInWindow((pageX, pageY, width, height) => {
          setPosition({
            pageX, pageY, width, height
          })
        });
      }
    }, [fabRef, isOpen])

    const renderAddIcon = useCallback(() => {
      const parentIcon = items ? (!open ? PlusIcon : CloseSmallIcon) : PlusIcon
      return createElement(parentIcon, {
        size: fabSizeCls[size].width - 20,
        color: whiteColor,
      });
    }, [open, position, measure, items])

    const measureChild = useCallback(() => {
      if (childRef && childRef?.current) {
        childRef.current.measureInWindow((pageX, pageY, width, height) => {
          setChildPosition({
            pageX, pageY, width, height
          })
        });
      }
    }, [childRef, isOpen])

    const renderChildItems = useCallback(() => (
      items &&
        items.map((e: DNAFabItemTypes) => {
          const { onPress, icon = PlusIcon, title } = e;
          const renderItemIcon =
            typeof icon === "function"
              ? createElement(icon, {
                  size: fabSizeCls[size].width - 25,
                  color: defaultColor,
                })
              : icon;
              
          return (
            <View key={`${icon}_${title}`}>
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
                  ]}
                >
                  {renderItemIcon}
                </TouchableOpacity>
              </View>
            </View>
          );
        })
    ),[size])

    const handlePress = (event: GestureResponderEvent) => {
      if (items) {
        setOpen((prev) => !prev);
      } else {
        onPress && onPress(event);
      }
    };
    
    const renderModal = useCallback(() => {
      if (!items) {
        return null;
      }

      return (
        <Modal
          animationType="fade"
          transparent
          visible={open}
          onRequestClose={() => 
            setOpen(false)
          }>
          <TouchableOpacity 
            activeOpacity={1} 
            style={styles.modalContainer} 
            onPress={() => 
              setOpen(false)
            }>
            <View style={[styles.fabWrapper]}>
              <TouchableOpacity
                  style={[
                    fabSizeCls[size],
                    styles.fab,
                    {
                      left: position?.pageX,
                      top: position?.pageY,
                      position: 'absolute',
                      backgroundColor: primaryColor,
                    }
                  ]}
                  onPress={(event) => { 
                    handlePress(event); 
                  }}>
                  {renderAddIcon()}
              </TouchableOpacity>
            </View>
            <View style={[
                styles.childrenStyle,
                {
                  position: 'absolute',
                  left: (position?.pageX + position?.width) - childPosition?.width, 
                  top: position?.pageY - childPosition?.height - styles.childrenStyle.gap,
                }]}>
              {renderChildItems()}
            </View>
          </TouchableOpacity>
        </Modal>
      )
    }, [position, measure, renderAddIcon, renderChildItems, size, childPosition])

    return (
      <>
        <View style={{ width: childPosition?.width, alignItems: 'flex-end' }}>
          <TouchableOpacity
              onLayout={measure}
              style={[
                fabSizeCls[size],
                { backgroundColor: primaryColor },
                styles.fab,
              ]}
              onPress={(event) => {
                handlePress(event);
              }}
              {...restProps}
              ref={fabRef}
            >
            {renderAddIcon()}
          </TouchableOpacity>
        </View>
        <View style={ {position: 'absolute', top: -99999 }} >
          <View 
            style={[styles.childrenStyle]}
            ref={childRef}
            onLayout={measureChild}
            >
            {renderChildItems()}
          </View>
        </View>
        {renderModal()}
      </>
    );
  }
);

export default DNAFab;
