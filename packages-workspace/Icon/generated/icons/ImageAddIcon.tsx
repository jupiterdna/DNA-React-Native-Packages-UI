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
      <Path d="M3.025 5.275a2.25 2.25 0 012.25-2.25h7.81v5.251h2.725v2.689h5.164v7.76a2.25 2.25 0 01-2.25 2.25H5.275a2.25 2.25 0 01-2.25-2.25V5.274zm11.123 6.856l-2.893 3.838-2.07-2.682-2.937 3.889h11.635l-3.735-5.045z" />
      <Path d="M16.975 7.133v2.37h1.5v-2.37h2.37v-1.5h-2.37v-2.37h-1.5v2.37h-2.37v1.5h2.37z" />
    </Svg>
  );
};
const ImageAddIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageAddIcon;
