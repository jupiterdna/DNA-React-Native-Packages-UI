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
      <Path d="M7.28 4.985l-1.061 1.06 5.78 5.78 5.78-5.78-1.06-1.06-4.72 4.72-4.72-4.72zM7.28 12.762l-1.061 1.06 5.78 5.781 5.78-5.78-1.06-1.061-4.72 4.72-4.72-4.72z" />
    </Svg>
  );
};
const ChevronDoubleDownIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChevronDoubleDownIcon;
