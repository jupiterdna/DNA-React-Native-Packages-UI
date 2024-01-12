//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CountryCircleIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm12.338-5.27h-6.59v11.522h1.5V13.25h2.617l.997 1.992 5.397.023V8.76l-2.927-.02-.994-2.01z" />
    </Svg>
  );
};
export default CountryCircleIcon;
