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
      <Path d="M12.75 14.171v3.004h-1.5V14.17H8.246v-1.5h3.004V9.668h1.5v3.003h3.003v1.5H12.75z" />
      <Path d="M9.25 2.508A2.25 2.25 0 007 4.758v1.517H4a2.25 2.25 0 00-2.25 2.25v10.233A2.25 2.25 0 004 21.008h16a2.25 2.25 0 002.25-2.25V8.525A2.25 2.25 0 0020 6.275h-3V4.758a2.25 2.25 0 00-2.25-2.25h-5.5zm6.25 3.767h-7V4.758a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v1.517zM3.25 8.525a.75.75 0 01.75-.75h1.125v11.733H4a.75.75 0 01-.75-.75V8.525zm3.375 10.983V7.775h10.748v11.733H6.625zm12.248 0V7.775H20a.75.75 0 01.75.75v10.233a.75.75 0 01-.75.75h-1.127z" />
    </Svg>
  );
};
const MedkitIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MedkitIconOutline;
