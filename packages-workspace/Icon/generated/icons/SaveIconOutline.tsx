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
      <Path d="M13.71 16.772a2.625 2.625 0 10-3.423-3.98 2.625 2.625 0 003.424 3.98z" />
      <Path d="M4.95 3A1.95 1.95 0 003 4.95v14.1A1.95 1.95 0 004.95 21h14.1A1.95 1.95 0 0021 19.05V7.006L16.953 3H4.95zM4.61 4.652A.45.45 0 014.95 4.5h.944v5.25h9.482V4.5h.963L19.5 7.632V19.05a.45.45 0 01-.45.45H4.95a.45.45 0 01-.45-.45V4.95c0-.115.043-.219.111-.298zM7.393 8.25V4.5h6.482v3.75H7.393z" />
    </Svg>
  );
};
const SaveIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SaveIconOutline;
