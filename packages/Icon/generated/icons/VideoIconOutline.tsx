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
      <Path d="M3.73 4.066a1.854 1.854 0 00-1.858 1.852v12.164c0 1.022.832 1.851 1.857 1.851h12.204a1.854 1.854 0 001.857-1.851v-5.007l4.338 4.44V6.573l-4.338 4.314v-4.97a1.854 1.854 0 00-1.857-1.85H3.729zm-.266 1.852c0-.147.119-.265.265-.265h12.204c.146 0 .265.118.265.265v12.164a.265.265 0 01-.265.264H3.729a.265.265 0 01-.265-.264V5.918z" />
    </Svg>
  );
};
const VideoIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default VideoIconOutline;
