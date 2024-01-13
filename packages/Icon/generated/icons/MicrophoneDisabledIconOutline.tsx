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
      <Path d="M15.7 17.213l4.586 4.586 1.061-1.06L2.809 2.2 1.748 3.26l7.189 7.19v.769a2.738 2.738 0 003.42 2.652l2.256 2.255A5.75 5.75 0 015.937 11.5H4.434a7.251 7.251 0 006.49 6.895v3.197h1.5v-3.197a7.203 7.203 0 003.275-1.182zM14.412 10.978V5.2a2.738 2.738 0 10-5.475 0v.302l1.5 1.5V5.2a1.238 1.238 0 012.475 0v4.278l1.5 1.5zM18.915 11.5a7.21 7.21 0 01-.859 3.122l-1.12-1.12a5.72 5.72 0 00.477-2.002h1.502z" />
    </Svg>
  );
};
const MicrophoneDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MicrophoneDisabledIconOutline;
