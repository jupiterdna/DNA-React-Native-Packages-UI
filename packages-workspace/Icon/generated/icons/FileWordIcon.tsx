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
      <Path d="M20 19.26V8.015L13.935 1.74H7a3 3 0 00-3 3v14.52a3 3 0 003 3h10a3 3 0 003-3zM13.592 8.312v-4.71l4.583 4.71h-4.583zm1.482 3.858l-1.182 5.523h-1.24l-.853-3.148-.856 3.153h-1.24l-1.181-5.523-.045-.17h1.315l.672 3.196.81-3.004h.05v-.005h.997l.81 3.004.673-3.195h1.315l-.045.169z" />
    </Svg>
  );
};
const FileWordIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileWordIcon;
