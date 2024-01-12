//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const SearchCheckIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M9.447 4.572a4.875 4.875 0 100 9.75 4.875 4.875 0 000-9.75zM3.072 9.447a6.375 6.375 0 1111.4 3.923l6.573 6.572-1.06 1.061-6.568-6.567A6.375 6.375 0 013.072 9.448zm9.474-1.253l-3.607 3.61-2.477-2.478 1.06-1.06L8.94 9.681l2.547-2.548 1.06 1.06z" />
    </Svg>
  );
};
export default SearchCheckIcon;
