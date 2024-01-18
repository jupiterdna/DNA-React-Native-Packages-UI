import { Platform, TextStyle } from "react-native";
import { fontNameType, fontWeightType, fontStyleType } from "./types";
import config from "./rndna-font.json";

export type selectedFontType =
  | {
      fullname: string;
      short_name: string;
      weight: string;
    }
  | undefined;

const findFont = (fontName: fontNameType, fontWeight?: fontWeightType, fontStyle: fontStyleType = 'normal') => {

    const selectedFontName = config.filter(
        (font) => font.short_name === fontName
      );
  
      let selected: selectedFontType = {
        fullname: "",
        short_name: "",
        weight: "",
      };

    if (fontStyle === "normal") {
        switch (fontWeight?.toLowerCase()) {
          case "black":
            selected = selectedFontName?.find(
              (f) =>
                f.weight.toLowerCase() === "black" ||
                f.weight.toLowerCase() === "extrabold"
            );
            return selected ? selected.fullname : `${fontName}-Regular`;
          case "bold":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "bold"
            );
            return selected ? selected.fullname : `${fontName}-Regular`;
          case "semibold":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "semibold"
            );
            return selected ? selected.fullname : `${fontName}-Regular`;
          case "medium":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "medium"
            );
            return selected ? selected.fullname : `${fontName}-Regular`;
          case "light":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "light"
            );
            return selected ? selected.fullname : `${fontName}-Regular`;
           case "thin":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "thin"
            );
            return selected ? selected.fullname : `${fontName}-Regular`;
          default:
              return `${fontName}-Regular`;
        }
      }
      else if (fontStyle === "italic") {
        switch (fontWeight?.toLowerCase()) {
          case "black":
            selected = selectedFontName?.find(
              (f) =>
                f.weight.toLowerCase() === "blackitalic" ||
                f.weight.toLowerCase() === "extrabolditalic"
            );
            return selected ? selected.fullname : `${fontName}-Italic`;
          case "bold":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "bolditalic"
            );
            return selected ? selected.fullname : `${fontName}-Italic`;
          case "semibold":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "semibolditalic"
            );
            return selected ? selected.fullname : `${fontName}-Italic`;
          case "medium":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "mediumitalic"
            );
            return selected ? selected.fullname : `${fontName}-Italic`;
          case "light":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "lightitalic"
            );
            return selected ? selected.fullname : `${fontName}-Italic`;
           case "thin":
            selected = selectedFontName?.find(
              (f) => f.weight.toLowerCase() === "thinitalic"
            );
            return selected ? selected.fullname : `${fontName}-Italic`;
          default:
              return `${fontName}-Italic`;
        }
      }
};

export const convertFontWeight = (weight?: fontWeightType) => {
    if(weight === 'black') {
        return "900"
    }
    else if(weight === 'bold') {
        return "bold"
    }
    else if(weight === 'light') {
        return "300"
    }
    else if(weight === 'normal') {
        return "normal"
    }
    else if(weight === 'semibold') {
        return "500"
    }
    else if(weight === 'thin') {
        return "100"
    }
    return "normal"
}

export const useFont = (
  fontName: fontNameType,
  fontWeight?: fontWeightType,
  fontStyle?: fontStyleType
) => {
  if (Platform.OS === "android") {
    const result: TextStyle = {
        fontFamily: findFont(fontName, fontWeight, fontStyle)
    }
    
    return result
  } else if (Platform.OS === "ios") {
      const result: TextStyle = {
        fontFamily: fontName,
        fontWeight: convertFontWeight(fontWeight),
        fontStyle: fontStyle
      }

      return result
  }
};

