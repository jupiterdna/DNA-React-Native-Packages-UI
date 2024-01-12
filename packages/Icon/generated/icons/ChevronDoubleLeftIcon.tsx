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
      <Path d="M11.67 7.28l-1.062-1.06L4.828 12l5.78 5.78 1.061-1.06L6.95 12l4.72-4.72zM19.24 7.28l-1.061-1.06-5.78 5.78 5.78 5.78 1.06-1.06L14.52 12l4.72-4.72z" />
    </Svg>
  );
};
const ChevronDoubleLeftIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChevronDoubleLeftIcon;
