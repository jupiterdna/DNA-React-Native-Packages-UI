//this is auto-generated files please do not edit!
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const wrapper = (props: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M.795 3.347H2.8l3.824 8.064-1.45 2.65c-.636 1.166.208 2.589 1.536 2.589h12.22v-1.5H6.712a.25.25 0 01-.219-.37l1.203-2.198h7.52a2.25 2.25 0 001.96-1.146l3.565-6.33a.844.844 0 00.106-.523.866.866 0 00-.114-.325A.84.84 0 0020 3.84H4.695L3.75 1.847H.795v1.5zm7.334 7.735L5.406 5.339H18.89l-3.02 5.361a.75.75 0 01-.654.382H8.129zM18.898 19.898a1.898 1.898 0 11-3.796 0 1.898 1.898 0 013.796 0zM6.705 21.797a1.898 1.898 0 100-3.797 1.898 1.898 0 000 3.797z" />
    </Svg>
  );
};
const CartIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CartIconOutline;
