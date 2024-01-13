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
      <Path d="M4.25 4.575A2.25 2.25 0 002 6.825v10.35a2.25 2.25 0 002.25 2.25h15.5a2.25 2.25 0 002.25-2.25V6.825a2.25 2.25 0 00-2.25-2.25H4.25zm10.36 6.09v-1.5h4.3v1.5h-4.3zm4.3 2.865h-4.3v-1.5h4.3v1.5zm-6.078-4.082v1.257H4.819V9.448l4.006-2.082 4.007 2.082zm-7.193 4.688v-2.527h1.5v2.527h-1.5zm2.438-2.527h1.5v2.527h-1.5v-2.527zm2.428 2.527v-2.527h1.5v2.527h-1.5zM4.748 16.54v-1.5H12.9v1.5H4.748z" />
    </Svg>
  );
};
const StateLicenseIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StateLicenseIcon;
