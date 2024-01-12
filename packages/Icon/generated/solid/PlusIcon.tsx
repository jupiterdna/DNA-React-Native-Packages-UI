//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PlusIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12.75 4.25v7h7v1.5h-7v7h-1.5v-7h-7v-1.5h7v-7h1.5z" />
    </Svg>
  );
};
export default PlusIcon;
