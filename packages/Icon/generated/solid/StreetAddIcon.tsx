//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const StreetAddIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M19.668 3.7h-7.25v4.183h-1.5V3.7H3.67v16.4h7.248v-4.183h1.5V20.1h1.125v-3.058h3.376v-3.376h2.749V3.7zm-8.75 10.292V9.808h1.5v4.184h-1.5z" />
      <Path d="M19.669 14.916v3.376h3.376v1.5H19.67v3.376h-1.5v-3.376h-3.376v-1.5h3.376v-3.376h1.5z" />
    </Svg>
  );
};
export default StreetAddIcon;
