import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
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

const RadioGroup: React.FC<CheckBoxGroupTypes> = forwardRef(
  (
    {
      children,
      assistiveText,
      disabled,
      label,
      orientation,
      required,
      ...rest
    },
    ref: React.Ref<View>
  ) => {
    const theme = useColor();
    const [localSelected, setLocalSelected] = useState<any>(undefined);

    useEffect(() => {
      const childs = Children.map(children, (c) => {
        return c?.type?.displayName;
      })?.find((f: childrenType) => f !== "DNARadioButton");

      if (!Children.count(children)) {
        throw new Error("RadioGroup must have at least 1 radion button!");
      }

      if (childs) {
        throw new Error(
          "Checkbox Group component only accepts checkbox controls!"
        );
      }

      const hasChecked: CheckBoxCustomTypes | undefined = Children.toArray(
        children
      ).find((radio: CheckBoxCustomTypes) => {
        return radio.props.checked === true;
      });

      if (!_.isEmpty(hasChecked?.props)) {
        setLocalSelected({ ...hasChecked?.props });
      }
    }, [children]);

    const errors = useValidator<string>({
      param: localSelected,
      validators: [isRequired(required)],
    });

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

    const getContainerStyle = useMemo((): StyleProp<ViewStyle> => {
      const style: StyleProp<ViewStyle> =
        orientation === "horizontal"
          ? { flexDirection: "row", columnGap: 10 }
          : { flexDirection: "column", rowGap: 10 };
      return label ? { ...style, marginTop: 10 } : style;
    }, [orientation, label]);

    const _renderRadioButtons = () => {
      return Children.map(children, (c) => {
        return <DNACheckbox {...c?.props} disabled={disabled} />;
      });
    };

    const _renderLabel = useCallback((): React.JSX.Element | null => {
      return <DNAText style={[labelStyle, styles.label]}>{label}</DNAText>;
    }, [label, labelStyle]);

    return (
      <View style={styles.mainContainer}>
        {_renderLabel()}
        <View ref={ref} style={[getContainerStyle]} {...rest}>
          {_renderRadioButtons()}
          {_renderAssistiveText()}
        </View>
      </View>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
