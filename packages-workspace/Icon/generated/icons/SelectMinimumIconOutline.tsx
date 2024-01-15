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
      <Path d="M4.875 2.625a2.25 2.25 0 00-2.25 2.25V9.46h1.5V4.875a.75.75 0 01.75-.75h14.25a.75.75 0 01.75.75v14.25a.75.75 0 01-.75.75h-4.582v1.5h4.582a2.25 2.25 0 002.25-2.25V4.875a2.25 2.25 0 00-2.25-2.25H4.875z" />
      <Path d="M4.769 10.955H2.625V13.1h1.5v-.644h.644v-1.5zM9.229 10.955H6.44v1.5H9.23v-1.5zM13.045 10.955H10.9v1.5h.644v.644h1.5v-2.144zM2.625 14.771v2.788h1.5V14.77h-1.5zM13.045 17.559V14.77h-1.5v2.788h1.5zM4.125 19.231h-1.5v2.144h2.144v-1.5h-.644v-.644zM13.045 21.375v-2.144h-1.5v.644H10.9v1.5h2.144zM6.441 21.375H9.23v-1.5H6.44v1.5z" />
    </Svg>
  );
};
const SelectMinimumIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SelectMinimumIconOutline;
