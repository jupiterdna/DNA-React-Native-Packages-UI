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
      <Path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm6.4-1.247a1.371 1.371 0 100-2.742 1.371 1.371 0 000 2.742zm8.556-1.371a1.371 1.371 0 10-2.742 0 1.371 1.371 0 002.742 0zM6.725 13.915a5.614 5.614 0 0010.553 0h-1.637a4.111 4.111 0 01-7.28 0H6.726z" />
    </Svg>
  );
};
const EmotionHappyIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default EmotionHappyIcon;
