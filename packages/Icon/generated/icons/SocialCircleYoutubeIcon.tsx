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
      <Path d="M10.861 13.715L13.822 12l-2.96-1.715v3.43z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.463 7.249c.111.418.172 1.05.203 1.603.035.625.035 1.148.035 1.148s0 1.86-.238 2.751a1.43 1.43 0 01-1.008 1.01C15.566 16 12 16 12 16s-3.563 0-4.453-.238a1.427 1.427 0 01-1.008-1.011c-.086-.32-.14-.766-.176-1.206C6.301 12.762 6.301 12 6.301 12s0-1.86.238-2.751a1.43 1.43 0 011.008-1.01c.363-.098 1.17-.155 1.998-.19C10.75 8 12 8 12 8s3.566 0 4.455.238c.492.133.877.52 1.008 1.011z" />
    </Svg>
  );
};
const SocialCircleYoutubeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SocialCircleYoutubeIcon;
