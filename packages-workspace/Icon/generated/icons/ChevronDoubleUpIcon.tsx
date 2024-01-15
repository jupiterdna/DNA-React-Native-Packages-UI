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
      <Path d="M16.719 11.21l1.06-1.06L12 4.37l-5.78 5.78 1.06 1.06L12 6.49l4.72 4.72zM16.719 19.032l1.06-1.061-5.78-5.78-5.78 5.78 1.06 1.06L12 14.313l4.72 4.72z" />
    </Svg>
  );
};
const ChevronDoubleUpIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChevronDoubleUpIcon;
