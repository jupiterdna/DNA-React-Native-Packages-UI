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
      <Path d="M2 6.306a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 6.306v11.389a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 17.695V6.305zm2.25-.75a.75.75 0 00-.75.75v11.389c0 .414.336.75.75.75h15.5a.75.75 0 00.75-.75V6.305a.75.75 0 00-.75-.75H4.25z" />
    </Svg>
  );
};
const AspectRatioLandscapeIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AspectRatioLandscapeIconOutline;
