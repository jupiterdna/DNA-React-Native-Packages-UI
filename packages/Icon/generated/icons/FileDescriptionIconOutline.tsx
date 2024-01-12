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
      <Path d="M5.25 3.5a.75.75 0 00-.75.75v15.5c0 .414.336.75.75.75h4.697V22H5.25A2.25 2.25 0 013 19.75V4.25A2.25 2.25 0 015.25 2h11.5A2.25 2.25 0 0119 4.25v6.767h-1.5V4.25a.75.75 0 00-.75-.75H5.25z" />
      <Path d="M17.809 13.237a.75.75 0 011.06 0l1.912 1.912a.75.75 0 010 1.06L14.991 22h-3.025v-2.92l5.843-5.843zm-.172 2.294l.85.85.703-.702-.85-.85-.703.702zm-.21 1.911l-.851-.85-3.11 3.11v.798h.903l3.058-3.058zM6.75 15.5h6V14h-6v1.5zM15.25 11.5h-8.5V10h8.5v1.5zM6.75 7.5h8.5V6h-8.5v1.5z" />
    </Svg>
  );
};
const FileDescriptionIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileDescriptionIconOutline;
