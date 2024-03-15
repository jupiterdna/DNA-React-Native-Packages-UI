import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import React, {
  Children,
  createElement,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CheckBoxCustomTypes,
  CheckBoxGroupTypes,
  childrenType,
  colorTypes,
} from "./types";
import { DNACheckbox } from "../Checkbox";
import { isRequired, useValidator } from "@rndna/hooks";
import { useColor } from "@rndna/theme-provider";
import _ from "lodash";
import { DNAText } from "@rndna/text";
import { styles } from "./styles";

/**
 * A CheckboxGroup is a wrapper component of checkbox button controls.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import {DNACheckboxGroup, DNACheckbox} from '@rndna/checkbox'
 * const option: CheckBoxGroupTypes[] = [
 *  {
 *    id: 'label',
 *    label: 'label',
 *  },
 *  {
 *    id: 'label2',
 *    label: 'label2',
 *    checked: true,
 *  },
 *];
 * const ComponentName = () => {
 * return (
 *  <DNACheckboxGroup
 *    orientation="horizontal"
 *    label="Radio Group"
 *    disabled
 *    required
 * >
 *     {option.map(op => {
 *      const active = selected?.id === op.id;
 *      return (
 *        <DNACheckbox
 *           key={op.id}
 *           checked={active}
 *           onPress={() => {
 *             setSelected(op);
 *           }}
 *          {...op}
 *        />
 *       );
 *    })}
 * </DNACheckboxGroup>)
 * }
 *
 * export default ComponentName;
 * ```
 */

const CheckboxGroup: React.FC<CheckBoxGroupTypes> = forwardRef(
  (
    {
      children,
      assistiveText,
      disabled,
      label,
      orientation,
      required = false,
      ...rest
    },
    ref: React.Ref<View>
  ) => {
    const theme = useColor();
    const [localSelected, setLocalSelected] = useState<any>(undefined);

    useEffect(() => {
      const childs = Children.map(children, (c) => {
        return c?.type?.displayName;
      })?.find((f: childrenType) => f !== "DNACheckbox");

      if (!Children.count(children)) {
        throw new Error("Checkbox Group must have at least 1 checkbox");
      }

      if (childs) {
        throw new Error(
          "Checkbox Group component only accepts checkbox controls!"
        );
      }

      const hasChecked: CheckBoxCustomTypes[] | undefined = Children.toArray(
        children
      ).filter((cbxbox: CheckBoxCustomTypes) => {
        return cbxbox.props.checked === true;
      });

      setLocalSelected(hasChecked);
    }, [children]);

    const errors = useValidator<string>({
      param: localSelected,
      validators: [isRequired(required)],
    });

    /**
     * Returns the color based on the provided color type.
     * If there are errors present, it returns the default danger color from the theme.
     * Otherwise, it returns the default color from the theme based on the provided color type.
     *
     * @param color - The color type to determine the color.
     * @returns The color value based on the provided color type.
     */
    const getColor = useCallback(
      (color: colorTypes) => {
        if (!_.isEmpty(errors)) {
          return theme.danger.default;
        }
        switch (color) {
          case "error":
            return theme.danger.default;
          default:
            return theme[color].default;
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [assistiveText, errors]
    );

    /**
     * Calculates the style for the label based on the current state.
     * If there are errors, the label color will be set to "error".
     * If there is assistive text and the checkbox is selected, the label color will be set to the type of the assistive text.
     * Otherwise, the label color will be set to the default color from the theme.
     *
     * @returns The style object for the label.
     */
    const labelStyle = useMemo((): StyleProp<TextStyle> => {
      if (!_.isEmpty(errors)) {
        return {
          color: getColor("error"),
        };
      }
      if (!_.isEmpty(assistiveText) && localSelected) {
        return {
          color: getColor(assistiveText.type),
        };
      }
      return {
        color: theme.default[500],
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localSelected, assistiveText, errors]);

    /**
     * Renders an icon based on the type provided.
     * @param type - The type of the icon. Can be "assistive" or "icon".
     * @returns The JSX.Element of the rendered icon, or null/undefined if no icon is selected.
     */
    const renderIcon = (
      type: "assistive" | "icon"
    ): React.JSX.Element | null | undefined => {
      const iconColor = !_.isEmpty(errors)
        ? getColor("error")
        : !_.isEmpty(assistiveText)
          ? getColor(assistiveText.type)
          : theme.default.default;

      const selectedIcon = assistiveText?.icon;

      if (!_.isEmpty(selectedIcon)) {
        return null;
      }

      return typeof selectedIcon === "function"
        ? createElement(selectedIcon, {
            size: type === "assistive" ? 14 : 22,
            color: iconColor,
          })
        : selectedIcon;
    };

    /**
     * Renders the assistive text based on the errors and assistiveText props.
     * If there are errors, it renders an error message.
     * If assistiveText is provided, it renders the assistiveText message.
     * If neither errors nor assistiveText is present, it returns null.
     *
     * @returns JSX.Element | null - The rendered assistive text component or null if no assistive text is needed.
     */
    const _renderAssistiveText = useCallback((): React.JSX.Element | null => {
      if (!_.isEmpty(errors)) {
        return (
          <View style={styles.assistiveTextContainer}>
            {renderIcon("assistive")}
            <DNAText
              style={[
                {
                  color: getColor("error"),
                },
                styles.assistiveText,
              ]}
            >
              {errors.message}
            </DNAText>
          </View>
        );
      }
      if (_.isEmpty(assistiveText)) {
        return null;
      }

      return (
        <View style={styles.assistiveTextContainer}>
          {renderIcon("assistive")}
          <DNAText
            style={[
              {
                color: getColor(assistiveText.type),
              },
              styles.assistiveText,
            ]}
          >
            {assistiveText?.message}
          </DNAText>
        </View>
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [assistiveText, errors]);

    /**
     * Returns the container style for the CheckboxGroup component based on the orientation and label presence.
     * @returns The container style for the CheckboxGroup component.
     */
    const getContainerStyle = useMemo((): StyleProp<ViewStyle> => {
      const style: StyleProp<ViewStyle> =
        orientation === "horizontal"
          ? { flexDirection: "row", columnGap: 10 }
          : { flexDirection: "column", rowGap: 10 };
      return label ? { ...style, marginTop: 10 } : style;
    }, [orientation, label]);

    /**
     * Renders the checkboxes based on the provided children.
     * @returns {React.ReactNode} The rendered checkboxes.
     */
    const _renderCheckboxes = () => {
      return Children.map(children, (c) => {
        return (
          <DNACheckbox
            {...c?.props}
            disabled={disabled}
            accessibilityLabel="This is Checkbox"
            accessibilityState={{ disabled: disabled }}
          />
        );
      });
    };

    const _renderLabel = useCallback((): React.JSX.Element | null => {
      return (
        <DNAText style={[labelStyle, styles.label]}>
          {label}
          {required && (
            <>
              <DNAText style={[labelStyle, styles.required]}>*</DNAText>
            </>
          )}
        </DNAText>
      );
    }, [label, labelStyle, required]);

    return (
      <View style={styles.mainContainer}>
        {_renderLabel()}
        <View ref={ref} style={[getContainerStyle]} {...rest}>
          {_renderCheckboxes()}
          {_renderAssistiveText()}
        </View>
      </View>
    );
  }
);

CheckboxGroup.displayName = "CheckboxGroup";

export default CheckboxGroup;
