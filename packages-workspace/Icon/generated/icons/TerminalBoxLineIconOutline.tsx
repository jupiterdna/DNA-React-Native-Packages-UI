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
      <Path d="M18.167 16.875H12v-1.5h6.167v1.5zM5.904 8.868L9.025 12l-3.12 3.131 1.062 1.058L11.143 12 6.967 7.81 5.904 8.87z" />
      <Path d="M2 4.75C2 3.784 2.784 3 3.75 3h16.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0120.25 21H3.75A1.75 1.75 0 012 19.25V4.75zm1.75-.25a.25.25 0 00-.25.25v14.5c0 .138.112.25.25.25h16.5a.25.25 0 00.25-.25V4.75a.25.25 0 00-.25-.25H3.75z" />
    </Svg>
  );
};
const TerminalBoxLineIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TerminalBoxLineIconOutline;
