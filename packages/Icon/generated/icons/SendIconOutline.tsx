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
      <Path d="M23.073 3.173l-19.9 7.208 12.691 12.69 7.209-19.898zM11.465 16.548l5.274-7.042-7.042 5.275-3.793-3.794 14.667-5.313-5.313 14.668-3.793-3.794z" />
    </Svg>
  );
};
const SendIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SendIconOutline;
