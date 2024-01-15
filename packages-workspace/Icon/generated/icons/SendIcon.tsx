//this is auto-generated files please do not edit!
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const wrapper = (props: Props) => {
  return (
    <Svg
      width={27}
      height={27}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M23.073 3.173l-19.9 7.208 5.31 5.31 8.256-6.185-6.184 8.256 5.31 5.31 7.208-19.9z" />
    </Svg>
  );
};
const SendIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SendIcon;
