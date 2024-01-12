//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const SpellcheckIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2.85 15.743l4.948-13.3h2.07l4.947 13.3h-1.6l-1.35-3.625H5.8L4.45 15.743h-1.6zm3.507-5.125h4.95L8.833 3.964l-2.475 6.654z" />
      <Path d="M14.091 21.557l7.06-7.06-1.06-1.061-6 6-3.175-3.172-1.06 1.061 4.235 4.232z" />
    </Svg>
  );
};
export default SpellcheckIcon;
