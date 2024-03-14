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
      <Path d="M2 6.306a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 6.306v11.389a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 17.695V6.305z" />
    </Svg>
  );
};
const AspectRatioLandscapeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AspectRatioLandscapeIcon;
