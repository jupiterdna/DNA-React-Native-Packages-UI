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
      <Path d="M14.245 10.867a6.803 6.803 0 01-3.175 5.758h2.277a3.001 3.001 0 005.81 0h3.095a.75.75 0 00.75-.75v-3.36a2.75 2.75 0 00-2.21-2.697l-3.17-.634-3.4-3.4a2.25 2.25 0 00-1.591-.659h-1.535a6.803 6.803 0 013.149 5.742zm3.507 5.008a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9.724 8.04a3.619 3.619 0 00-5.835 3.454l1.107-1.043.904.96-2.523 2.377L1 11.265l.96-.904.555.59a4.937 4.937 0 018.179-3.817l-.97.906z" />
      <Path d="M4.293 14.702a4.937 4.937 0 008.06-3.917l.556.59.96-.905-2.377-2.523-2.523 2.377.904.96 1.107-1.043a3.619 3.619 0 01-5.715 3.547l-.972.914z" />
    </Svg>
  );
};
const CarRecallIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarRecallIcon;
