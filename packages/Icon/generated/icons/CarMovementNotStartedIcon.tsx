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
      <Path d="M6.676 15.84a5.678 5.678 0 100-11.356 5.678 5.678 0 000 11.356zm2.713-4.928H3.963v-1.5h5.426v1.5z" />
      <Path d="M13.344 17.266H7.713a7.179 7.179 0 004.638-11.5h.277c.597 0 1.17.237 1.591.659l3.4 3.4 3.17.634A2.75 2.75 0 0123 13.155v3.36a.75.75 0 01-.75.75h-3.094a3.001 3.001 0 01-5.81 0zm4.406-.75a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </Svg>
  );
};
const CarMovementNotStartedIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarMovementNotStartedIcon;
