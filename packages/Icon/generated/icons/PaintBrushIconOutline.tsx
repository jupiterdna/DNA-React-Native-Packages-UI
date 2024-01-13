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
      <Path d="M7.809 3.017a3.75 3.75 0 00-3.75 3.75v6.856a2.25 2.25 0 002.25 2.25h2.85v4.392c0 .967.784 1.75 1.75 1.75h2.21a1.75 1.75 0 001.75-1.75v-4.392h2.85a2.25 2.25 0 002.25-2.25V3.017H7.809zm2.85 12.856h2.71v4.392a.25.25 0 01-.25.25h-2.21a.25.25 0 01-.25-.25v-4.392zm-5.1-9.106a2.25 2.25 0 012.25-2.25h3.767v2.03h1.5v-2.03h1.98v3.64h1.5v-3.64h1.913v5.733H5.559V6.767zm.75 7.606a.75.75 0 01-.75-.75V11.75h12.91v1.873a.75.75 0 01-.75.75H6.309z" />
    </Svg>
  );
};
const PaintBrushIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PaintBrushIconOutline;
