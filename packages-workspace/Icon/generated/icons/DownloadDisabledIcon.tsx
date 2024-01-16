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
      <Path d="M18.294 19.75l2.768 2.769 1.061-1.061L2.397 1.73 1.336 2.791 7.794 9.25H5.695l6.311 6.31 1.05-1.05 3.738 3.74H5.272v1.5h13.022zM18.317 9.25l-2.794 2.793-6.267-6.267V3.25h5.5v6h3.56z" />
    </Svg>
  );
};
const DownloadDisabledIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DownloadDisabledIcon;
