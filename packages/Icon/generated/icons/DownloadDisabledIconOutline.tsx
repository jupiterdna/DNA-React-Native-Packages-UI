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
      <Path d="M18.29 19.75l2.769 2.769 1.06-1.061L2.393 1.73 1.332 2.791 7.79 9.25H5.691l6.311 6.31 1.05-1.05 3.738 3.74H5.269v1.5h13.02zM18.313 9.25l-2.794 2.793-2.267-2.267V4.75h-2.5v2.526l-1.5-1.5V3.25h5.5v6h3.56z" />
    </Svg>
  );
};
const DownloadDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DownloadDisabledIconOutline;
