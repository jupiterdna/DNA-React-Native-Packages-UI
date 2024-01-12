//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PencilDisabledIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M16.021 3.22a2.25 2.25 0 013.182 0l1.553 1.553a2.25 2.25 0 010 3.182l-1.21 1.21-4.734-4.735 1.21-1.21zM2.142 4.393l6.363 6.364-6.046 6.046v4.742h4.742l6.046-6.046 6.325 6.324 1.06-1.06-17.43-17.43-1.06 1.06zM13.758 5.503l4.743 4.743-2.77 2.769-4.758-4.726 2.785-2.786z" />
    </Svg>
  );
};
export default PencilDisabledIcon;
