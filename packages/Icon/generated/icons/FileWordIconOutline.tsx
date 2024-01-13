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
      <Path d="M20 8.015L13.935 1.74H7a3 3 0 00-3 3v14.52a3 3 0 003 3h10a3 3 0 003-3V8.015zm-1.5 1.797v9.448a1.5 1.5 0 01-1.5 1.5H7a1.5 1.5 0 01-1.5-1.5V4.74A1.5 1.5 0 017 3.24h5.092v6.572H18.5zm-4.908-6.21l4.583 4.71h-4.583v-4.71z" />
      <Path d="M15.076 12.17l-1.182 5.522h-1.24l-.854-3.148-.855 3.153h-1.24l-1.182-5.523-.044-.17h1.315l.672 3.196.81-3.003h.05v-.005h.997l.81 3.004.673-3.196h1.315l-.045.17z" />
    </Svg>
  );
};
const FileWordIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileWordIconOutline;
