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
      <Path d="M18.423 14.8a7.002 7.002 0 01-13.416-2.805 7.003 7.003 0 014.23-6.431 8.004 8.004 0 009.186 9.235zm.488-1.644a6.504 6.504 0 01-7.33-9.651 8.485 8.485 0 00-1.832.293 8.5 8.5 0 1010.745 8.67c-.49.295-1.02.529-1.583.688z" />
    </Svg>
  );
};
const MoonIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MoonIconOutline;
