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
      <Path d="M3.9 1.65A2.25 2.25 0 001.65 3.9v16.2a2.25 2.25 0 002.25 2.25h4.461a2.25 2.25 0 002.25-2.25V3.9a2.25 2.25 0 00-2.25-2.25h-4.46zM3.15 3.9a.75.75 0 01.75-.75h4.461a.75.75 0 01.75.75v16.2a.75.75 0 01-.75.75h-4.46a.75.75 0 01-.75-.75V3.9zM15.639 1.65a2.25 2.25 0 00-2.25 2.25v16.2a2.25 2.25 0 002.25 2.25h4.46a2.25 2.25 0 002.25-2.25V3.9a2.25 2.25 0 00-2.25-2.25h-4.46zm-.75 2.25a.75.75 0 01.75-.75h4.46a.75.75 0 01.75.75v16.2a.75.75 0 01-.75.75h-4.46a.75.75 0 01-.75-.75V3.9z" />
    </Svg>
  );
};
const ColumnVerticalIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ColumnVerticalIcon;
