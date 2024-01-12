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
      <Path d="M14.751 3.75h-5.5v6h-3.56L12 16.06l6.31-6.31h-3.56v-6zm-4 7.5v-6h2.5v6h1.44L12 13.94l-2.69-2.69h1.44zM5.268 20.25h13.465v-1.5H5.268v1.5z" />
    </Svg>
  );
};
const DownloadIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DownloadIconOutline;
