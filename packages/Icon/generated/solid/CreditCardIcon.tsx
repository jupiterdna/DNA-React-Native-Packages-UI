//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CreditCardIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2 6.325a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 6.325v2.5H2v-2.5zM2 10.825h20v6.85a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 17.675v-6.85zm2.75 5.75h3.977v-1.5H4.75v1.5z" />
    </Svg>
  );
};
export default CreditCardIcon;
