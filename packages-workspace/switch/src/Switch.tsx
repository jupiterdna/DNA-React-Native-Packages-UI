import React, { createElement, useCallback, useState } from 'react';
import { 
    View, 
    useColorScheme, 
    Switch as RNSwitch, 
    ViewStyle, 
} from 'react-native';
import { DNASwitchProps } from './types';
import { DNAText } from '@rndna/text';
import { useColor } from "@rndna/theme-provider"
import { styles } from './styles';


/**
 * A Switch is a component that allows the user to toggle between two states: on and off.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, Text } from 'react-native';
 * import { DNASwitch } from '@rndna/switch';
 *
 * const ComponentName = () => {
 *    const [isChecked, setIsChecked] = useState(true);
 *    const handleSwitchChange = (newValue: boolean) => {
 *        setIsChecked(newValue);
 *    };
 *    <View>
 *      <DNASwitch
 *        labelLeft="OFF"
 *        labelRight="ON"
 *        iconLeft={SunIcon}
 *        iconRight={MoonIcon}
 *        checked={isChecked}
 *        onValueChange={handleSwitchChange}
 *      />
 *    </View>
 * }
 *
 * export default ComponentName;
 * ```
 */
export const DNASwitch: React.FC<DNASwitchProps> = React.forwardRef(
    (
        {   
        title,
        titlePosition = 'top',
        labelRight,
        labelLeft,
        size = 'md',
        color = "primary", 
        checked = false,
        disabled = false,
        variant = 'solid',
        value,
        onValueChange,
        iconLeft,
        iconRight,
        ...restProps
        }: DNASwitchProps,
        ref: React.Ref<RNSwitch>
    ) => {

    const themeColor = useColor();
    const colorScheme = useColorScheme();
    const defaultColor = themeColor[color]["default"];
    const secondaryColor = themeColor[color][900];
    const lightColor = themeColor[color][100];
    const whiteColor = themeColor["default"][100];
    const blackColor = themeColor["default"][900];
    const getAlignment = !!labelLeft || !!labelRight ? styles.alignCenter : null;
    const getLabelsGap = !!labelLeft || !!labelRight ? styles.gap : null
    const getTitleGap = !!title ? styles.gap : null

    const getTextColor = {
        color: blackColor,
    };

    const getTrackTrueColor = variant === 'filled' ? lightColor : defaultColor

    /**
     * This function is used to determine the color of the thumb (the switch part that moves) 
     * It's created to provide dynamic color changes for the switch component
     * 
     * @returns string that represents the color of the thumb
     */
    const getThumbColor = useCallback((): string => {
        // Light mode
        if (colorScheme === 'light') {
            if (variant === 'filled' && checked) {
                return defaultColor;
            }
            return whiteColor;
        }
        
        // Dark mode
        if (variant === 'filled') {
            if (checked) {
                return defaultColor;
            }
            return whiteColor;
        }
        
        if (checked) {
            return lightColor;
        }
        
        return whiteColor;
    },[
        variant, 
        checked, 
        defaultColor, 
        whiteColor, 
        blackColor, 
        lightColor, 
        secondaryColor, 
        colorScheme
    ]);

    /**
     * This function is used to determine the placement of the label relative to the switch component.
     * It's created to provide flexibility in positioning the label.
     * 
     * @returns {ViewStyle} - It returns a style object that sets the flexDirection property.
     */
    const getLabelPlacement = useCallback((): ViewStyle => {
        switch (titlePosition) {
        case 'top':
            return {flexDirection: 'column'};
        case 'bottom':
            return {flexDirection: 'column-reverse'};
        case 'left':
            return  {flexDirection: 'row'};
        case 'right':
            return  {flexDirection: 'row-reverse'};
        default:
            return {flexDirection: 'column'};
        }
    },[titlePosition])

    /**
     * This function is used to render the left icon of the switch component.
     * 
     * @param {number} iconSize - The size of the icon.
     * @param {string} color - The color of the icon.
     * 
     * @returns {React.ReactNode} - It returns a React node that represents the left icon of the switch. 
     */
    const _renderIconLeft = useCallback((iconSize: number, color: string): React.ReactNode => {
        return typeof iconLeft === "function" 
          ? createElement(iconLeft, {
              size: iconSize,
              color: color,
            })
          : null;
      }, [iconLeft, size, color]);

    /**
     * This function is used to render the right icon of the switch component.
     * 
     * @param {number} iconSize - The size of the icon.
     * @param {string} color - The color of the icon.
     * 
     * @returns {React.ReactNode} - It returns a React node that represents the right icon of the switch. 
     */
    const _renderIconRight = useCallback((iconSize: number, color: string): React.ReactNode => {
        return typeof iconRight === "function" 
          ? createElement(iconRight, {
              size: iconSize,
              color: color,
            })
          : null;
      }, [iconRight, size, color]);

    /**
     * This function is used to render the switch component along with its icons.
     * It's created to encapsulate the logic for rendering the switch and its icons.
     * 
     * @returns {React.JSX.Element} - It returns a JSX element that represents the switch component. 
     */
    const _renderSwitch = useCallback((): React.JSX.Element => {

        const iconSize = 20;
        const iconColor = checked ? getTrackTrueColor : blackColor
        const iconStyle: ViewStyle = {
            position: 'absolute',
            left: checked ? '50%' : '10%',
            top: '50%',
            transform: [{ translateY: - ( iconSize / 2) }],
            pointerEvents: 'none'
        }

        return (
        <View style={{position: 'relative'}}>
            <RNSwitch
                trackColor={{ 
                    false: blackColor, 
                    true: getTrackTrueColor
                }}
                thumbColor={getThumbColor()}
                ios_backgroundColor={blackColor}
                value={checked}
                onValueChange={onValueChange}
                disabled={disabled}
                {...restProps}
                ref={ref}
            />
            <View style={iconStyle}>
                {checked 
                    ? _renderIconLeft(iconSize, iconColor)
                    : _renderIconRight(iconSize, iconColor)
                }
            </View>
        </View>
        )
    },[checked, disabled, getThumbColor, restProps, ref]);
    
    /**
     * This function is used to render the title or label of the switch component.
     * @returns {React.JSX.Element | null} - It returns a JSX element that represents the title label of the switch. 
     */
    const _renderLabel = useCallback((): React.JSX.Element | null => {
        return !!title ? <DNAText style={getTextColor}>{title}</DNAText> : null
    },[title, getTextColor])

    /**
     * This function is used to render the left label of the switch component.
     * 
     * @returns {React.JSX.Element | null} - It returns a JSX element that represents the left label of the switch. 
     */
    const _renderLabelLeft = useCallback((): React.JSX.Element | null => {
        return !!labelLeft ? <DNAText style={getTextColor}>{labelLeft}</DNAText> : null
    },[labelLeft, getTextColor])

    /**
     * This function is used to render the right label of the switch component.
     * 
     * @returns {React.JSX.Element | null} - It returns a JSX element that represents the right label of the switch.
     */
    const _renderLabelRight = useCallback((): React.JSX.Element | null => {
        return !!labelRight ? <DNAText style={getTextColor}>{labelRight}</DNAText> : null
    },[labelRight, getTextColor])

    return (
        <View style={[getLabelPlacement(), getAlignment, getTitleGap]}>
        {_renderLabel()}
            <View style={[styles.container, getLabelsGap]}> 
                {_renderLabelLeft()}
                {_renderSwitch()}
                {_renderLabelRight()}
            </View>
        </View>
    );
}
);