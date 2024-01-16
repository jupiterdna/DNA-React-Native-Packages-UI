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
      <Path d="M10.25 9.165h3.502v3.82h2.267l-4.018 4.017-4.018-4.017h2.267v-3.82z" />
      <Path d="M12.002 4.24c3.558 0 6.49 2.603 7.234 6.04a4.739 4.739 0 01-.221 9.472H5.979a5.745 5.745 0 01-5.745-5.745c0-3.002 2.327-5.458 5.253-5.722C6.739 5.887 9.174 4.24 12 4.24zM6.505 9.674c-.671.044-1.318.14-1.712.264-1.763.523-3.059 2.15-3.059 4.069 0 2.344 1.9 4.245 4.245 4.245h13.036a3.238 3.238 0 00.79-6.38c-.451-.121-1.112-.152-1.893-.172-.145-3.349-2.768-5.96-5.91-5.96-2.473 0-4.62 1.612-5.497 3.934z" />
    </Svg>
  );
};
const DownloadCloudIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DownloadCloudIconOutline;
