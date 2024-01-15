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
      <Path d="M4.045 6.767a3.75 3.75 0 013.75-3.75h12.16v10.606a2.25 2.25 0 01-2.25 2.25h-2.85v4.393a1.75 1.75 0 01-1.75 1.75h-2.21a1.75 1.75 0 01-1.75-1.75v-4.393h-2.85a2.25 2.25 0 01-2.25-2.25V6.767zm3.75-2.25a2.25 2.25 0 00-2.25 2.25v3.483h12.91V4.517h-1.912v3.64h-1.5v-3.64h-1.98v2.03h-1.5v-2.03H7.795z" />
    </Svg>
  );
};
const PaintBrushIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PaintBrushIcon;
