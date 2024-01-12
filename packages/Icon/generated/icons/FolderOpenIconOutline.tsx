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
      <Path d="M3.532 6.324a.75.75 0 01.75-.75h4.713l2.253 2.265h10.596a2.25 2.25 0 00-2.122-1.5h-7.85L9.618 4.074H4.282a2.25 2.25 0 00-2.25 2.25l-.005 11.612a2.25 2.25 0 002.25 2.251h14.405a2.25 2.25 0 002.159-1.614l2.384-8.098H6.602l-2.417 8.207a.75.75 0 01-.658-.745l.005-11.613zm15.15 12.363H5.747l1.977-6.712H21.22l-1.818 6.174a.75.75 0 01-.72.538z" />
    </Svg>
  );
};
const FolderOpenIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FolderOpenIconOutline;
