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
      <Path d="M11.974 9.09l-1.061 1.06 2.345 2.345h-5.51v1.5h5.51l-2.345 2.344 1.06 1.061 4.156-4.155-4.155-4.156z" />
      <Path d="M4.278 4.066a2.25 2.25 0 00-2.25 2.25l-.005 11.613a2.25 2.25 0 002.25 2.25h15.445a2.25 2.25 0 002.25-2.25V8.583a2.25 2.25 0 00-2.25-2.25h-7.85L9.615 4.066H4.278zm-.75 2.25a.75.75 0 01.75-.75h4.713l2.253 2.266h8.474a.75.75 0 01.75.75v9.348a.75.75 0 01-.75.75H4.273a.75.75 0 01-.75-.75l.005-11.614z" />
    </Svg>
  );
};
const FolderMoveToIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FolderMoveToIconOutline;
