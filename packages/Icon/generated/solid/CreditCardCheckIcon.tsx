//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CreditCardCheckIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2 5.331a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 5.331v2.5H2v-2.5zM2 9.831h20v3.307a5.938 5.938 0 00-9.819 5.793H4.25A2.25 2.25 0 012 16.681v-6.85zm2.75 5.75h3.977v-1.5H4.75v1.5z" />
      <Path d="M16.994 20.919L22 15.912l-1.06-1.06-3.946 3.945-1.894-1.894-1.06 1.06 2.954 2.956z" />
    </Svg>
  );
};
export default CreditCardCheckIcon;
