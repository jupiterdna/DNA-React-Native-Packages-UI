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
      <Path d="M4.748 16.72l1.06 1.06L11.59 12l-5.78-5.78-1.061 1.06L9.468 12l-4.72 4.72zM12.318 16.72l1.061 1.06 5.78-5.78-5.78-5.78-1.06 1.06L17.037 12l-4.72 4.72z" />
    </Svg>
  );
};
const ChevronDoubleRightIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChevronDoubleRightIcon;
