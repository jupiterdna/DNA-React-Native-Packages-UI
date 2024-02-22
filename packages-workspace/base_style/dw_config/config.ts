import transform, { StyleTuple } from "css-to-react-native";

/**
 * Transforms CSS properties to React Native styles using the css-to-react-native library.
 * @param val - Array of CSS property-value pairs or an array of such arrays.
 * @returns Transformed React Native styles.
 */
const tr = (val: [string, string] | [string, string][]) => {
    if (!val?.length) {
        return {}
    }
    if (Array.isArray(val[0])) {
        return transform(val as StyleTuple[]);
    }
    return transform([val] as StyleTuple[]);
};

/**
 * Custom styles defined using the tr() function.
 */
export const customStyle = {
    "text-center": tr(["text-align", "center"]),
    "text-2xl": tr(["font-size", "30px"]),
    "justify-center": tr(["justify-content", "center"]),
    "items-center": tr(["align-items", "center"]),
    "flex-1": tr(["flex", "1"]),
    "bg-red-500": tr(["background-color", "#f56565"]),
    "tests": tr([["font-size", "30px"], ["color", "red"]]),
};

