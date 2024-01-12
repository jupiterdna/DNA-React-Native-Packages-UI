//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PencilIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M16.085 3.167a2.25 2.25 0 013.182 0l1.552 1.553a2.25 2.25 0 010 3.182l-1.21 1.209-4.734-4.734 1.21-1.21zM13.82 5.45l4.743 4.743-11.3 11.298H2.522V16.75l11.3-11.3z" />
    </Svg>
  );
};
export default PencilIcon;
