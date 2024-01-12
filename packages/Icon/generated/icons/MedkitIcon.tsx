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
      <Path d="M9.25 2.993A2.25 2.25 0 007 5.243V6.76h-.375v14.733h10.748V6.76H17V5.243a2.25 2.25 0 00-2.25-2.25h-5.5zM15.5 6.76h-7V5.243a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75V6.76zm-2.75 3.393v3.003h3.003v1.5H12.75v3.004h-1.5v-3.004H8.246v-1.5h3.004v-3.003h1.5zM18.873 6.76v14.733H20a2.25 2.25 0 002.25-2.25V9.01A2.25 2.25 0 0020 6.76h-1.127zM5.125 6.76H4a2.25 2.25 0 00-2.25 2.25v10.232A2.25 2.25 0 004 21.492h1.125V6.76z" />
    </Svg>
  );
};
const MedkitIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MedkitIcon;
