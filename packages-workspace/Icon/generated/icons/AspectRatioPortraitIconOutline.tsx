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
      <Path d="M4 4.25A2.25 2.25 0 016.25 2h11.5A2.25 2.25 0 0120 4.25v15.5A2.25 2.25 0 0117.75 22H6.25A2.25 2.25 0 014 19.75V4.25zm2.25-.75a.75.75 0 00-.75.75v15.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75V4.25a.75.75 0 00-.75-.75H6.25z" />
    </Svg>
  );
};
const AspectRatioPortraitIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AspectRatioPortraitIconOutline;
