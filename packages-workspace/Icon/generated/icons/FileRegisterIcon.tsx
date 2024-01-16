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
      <Path d="M14.842 3.119h3.908c1.242 0 2.25 1.018 2.25 2.274v6.715a2.75 2.75 0 00-2.669.709l-6.429 6.429v1.748H5.25C4.008 20.994 3 19.976 3 18.72V5.393c0-1.256 1.008-2.274 2.25-2.274h3.91C9.383 1.719 10.622.73 12.001.73c1.379 0 2.618.989 2.84 2.389zM12 2.2a.756.756 0 00-.667 1.1.74.74 0 00.667.416c.45 0 .751-.38.751-.758s-.3-.758-.751-.758zM7 7.165v1.5h10v-1.5H7zm0 4.106v1.5h10v-1.5H7zm7 5.605v-1.5H7v1.5h7zM19.745 14.23a.75.75 0 011.061 0l1.912 1.913a.75.75 0 010 1.06l-1.234 1.234-2.971-2.973 1.232-1.233zM17.452 16.524l2.97 2.974-3.495 3.496h-3.025v-2.92l3.55-3.55z" />
    </Svg>
  );
};
const FileRegisterIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileRegisterIcon;
