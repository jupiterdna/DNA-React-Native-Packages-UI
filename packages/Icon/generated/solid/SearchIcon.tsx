//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const SearchIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M9.447 4.59a4.875 4.875 0 013.467 8.302l-.04.04A4.875 4.875 0 119.448 4.59zm5.026 8.797a6.375 6.375 0 10-1.056 1.066l6.567 6.567 1.061-1.06-6.572-6.573z" />
    </Svg>
  );
};
export default SearchIcon;
