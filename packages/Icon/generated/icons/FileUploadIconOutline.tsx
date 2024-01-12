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
      <Path d="M15.99 15.144l-4.031-4.03-4.03 4.03 1.06 1.06 2.22-2.22v4.934h1.5v-4.933l2.22 2.22 1.06-1.061z" />
      <Path d="M6.25 2A2.25 2.25 0 004 4.25v15.5A2.25 2.25 0 006.25 22h11.5A2.25 2.25 0 0020 19.75V8.098L13.91 2H6.25zM5.5 4.25a.75.75 0 01.75-.75h5.861v6.385H18.5v9.865a.75.75 0 01-.75.75H6.25a.75.75 0 01-.75-.75V4.25zm12.666 4.135h-4.555V3.823l4.555 4.562z" />
    </Svg>
  );
};
const FileUploadIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileUploadIconOutline;
