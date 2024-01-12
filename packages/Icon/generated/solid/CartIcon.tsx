//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CartIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2.801 3.347H.795v-1.5H3.75l.945 1.992H20c.65 0 1.06.7.74 1.267l-3.564 6.33a2.25 2.25 0 01-1.96 1.146H7.694L6.492 14.78a.25.25 0 00.22.37h12.22v1.5H6.711a1.75 1.75 0 01-1.536-2.59l1.449-2.65L2.8 3.347zM17 21.797A1.898 1.898 0 1017 18a1.898 1.898 0 000 3.797zM8.603 19.898a1.898 1.898 0 11-3.796 0 1.898 1.898 0 013.796 0z" />
    </Svg>
  );
};
export default CartIcon;
