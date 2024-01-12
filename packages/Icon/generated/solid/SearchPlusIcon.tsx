//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const SearchPlusIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M9.447 4.589a4.875 4.875 0 013.467 8.302l-.04.04a4.875 4.875 0 11-3.427-8.342zm5.026 8.798a6.375 6.375 0 10-1.056 1.066l6.567 6.566 1.061-1.06-6.572-6.572zm-4.276-6.998v2.325h2.325v1.5h-2.325v2.325h-1.5v-2.325H6.372v-1.5h2.325V6.389h1.5z" />
    </Svg>
  );
};
export default SearchPlusIcon;
