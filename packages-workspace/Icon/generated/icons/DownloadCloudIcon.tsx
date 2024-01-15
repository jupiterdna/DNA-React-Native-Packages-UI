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
      <Path d="M12.007 4.24c3.56 0 6.492 2.603 7.234 6.04a4.739 4.739 0 01-.22 9.472H5.985A5.745 5.745 0 01.24 14.007c0-3.002 2.326-5.458 5.253-5.722C6.745 5.887 9.18 4.24 12.007 4.24zm-1.75 4.925v3.82H7.988l4.018 4.017 4.018-4.017h-2.267v-3.82h-3.502z" />
    </Svg>
  );
};
const DownloadCloudIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DownloadCloudIcon;