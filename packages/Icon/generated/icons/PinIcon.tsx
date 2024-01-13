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
      <Path d="M7.026 3.962h1.087v7.558l-2.076 1.985.001 1.853h5.212v6.84l.75.75.75-.75v-6.84h5.267v-1.853l-2.075-1.985V3.962h1.087v-1.5H7.026v1.5z" />
    </Svg>
  );
};
const PinIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PinIcon;
