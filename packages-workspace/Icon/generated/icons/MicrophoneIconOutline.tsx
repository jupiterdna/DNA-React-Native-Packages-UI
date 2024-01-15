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
      <Path d="M9.262 5.173a2.738 2.738 0 015.475 0v6.02a2.738 2.738 0 11-5.475 0v-6.02zm2.737-1.237c-.683 0-1.237.554-1.237 1.237v6.02a1.238 1.238 0 102.475 0v-6.02c0-.683-.554-1.237-1.238-1.237z" />
      <Path d="M12.75 18.368a7.251 7.251 0 006.49-6.895H17.74A5.75 5.75 0 0112 16.906a5.75 5.75 0 01-5.738-5.433H4.76a7.252 7.252 0 006.49 6.895v3.197h1.5v-3.197z" />
    </Svg>
  );
};
const MicrophoneIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MicrophoneIconOutline;
