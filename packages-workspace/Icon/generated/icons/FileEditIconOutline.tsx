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
      <Path d="M4.5 4.25a.75.75 0 01.75-.75h5.861v6.385H17.5v1.132H19V8.098L12.91 2H5.25A2.25 2.25 0 003 4.25v15.5A2.25 2.25 0 005.25 22h4.697v-1.5H5.25a.75.75 0 01-.75-.75V4.25zm12.666 4.135h-4.555V3.823l4.555 4.562z" />
      <Path d="M18.87 13.237a.75.75 0 00-1.061 0l-5.843 5.843V22h3.025l5.79-5.79a.75.75 0 000-1.061l-1.911-1.912zm-.382 3.145l-.851-.851.702-.703.851.851-.702.703zm-1.912.21l.851.85-3.058 3.058h-.903v-.798l3.11-3.11z" />
    </Svg>
  );
};
const FileEditIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileEditIconOutline;
