//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const StarIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12 3.407l2.546 5.996 6.489.569-4.915 4.274 1.464 6.347L12 17.239l-5.584 3.354 1.464-6.347-4.915-4.274 6.489-.57L12 3.408z" />
    </Svg>
  );
};
export default StarIcon;
