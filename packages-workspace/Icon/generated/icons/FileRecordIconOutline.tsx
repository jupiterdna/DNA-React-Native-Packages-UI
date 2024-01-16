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
      <Path d="M8 11.75h8v-1.5H8v1.5zM16 7.75H8v-1.5h8v1.5z" />
      <Path d="M6.25 2A2.25 2.25 0 004 4.25v15.5A2.25 2.25 0 006.25 22h11.5A2.25 2.25 0 0020 19.75V4.25A2.25 2.25 0 0017.75 2H6.25zM5.5 4.25a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v14.775l-2.835-3.722a2.75 2.75 0 00-2.188-1.084H5.5V4.25zm0 11.47h7.977c.39 0 .758.181.995.492l3.266 4.288H6.25a.75.75 0 01-.75-.75v-4.03z" />
    </Svg>
  );
};
const FileRecordIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileRecordIconOutline;
