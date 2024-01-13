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
      <Path d="M9.251 10.06v6h5.5v-6h3.56l-6.31-6.31-6.31 6.31h3.56zm1.5 4.5v-6h-1.44l2.69-2.689 2.69 2.69h-1.44v6h-2.5zM18.733 20.25H5.268v-1.5h13.465v1.5z" />
    </Svg>
  );
};
const UploadIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UploadIconOutline;
