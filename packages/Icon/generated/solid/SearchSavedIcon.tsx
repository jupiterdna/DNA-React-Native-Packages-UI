//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const SearchSavedIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M9.447 4.578a4.875 4.875 0 100 9.75 4.875 4.875 0 000-9.75zM3.072 9.453a6.375 6.375 0 1111.4 3.923l6.573 6.572-1.06 1.06-6.568-6.566A6.375 6.375 0 013.072 9.454zM9.45 5.786l.846 2.5h2.53l-2.038 1.686.823 2.61-2.165-1.623-2.178 1.622.856-2.605-2.106-1.69h2.58l.852-2.5z" />
    </Svg>
  );
};
export default SearchSavedIcon;
