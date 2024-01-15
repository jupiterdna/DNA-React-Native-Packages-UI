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
      <Path d="M18.306 19.757l2.765 2.765 1.061-1.06L2.4 1.73 1.34 2.79 6.91 8.363 5.706 9.568h2.41l1.15 1.15v4.85h4.85l2.69 2.689H5.283v1.5h13.023zm-5.69-5.69h-1.85v-1.85l1.85 1.85zM14.767 9.568v1.708l-1.5-1.5V8.068h1.44l-2.69-2.69-1.574 1.574-1.06-1.06 2.634-2.635 6.31 6.31h-3.56z" />
    </Svg>
  );
};
const UploadDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UploadDisabledIconOutline;