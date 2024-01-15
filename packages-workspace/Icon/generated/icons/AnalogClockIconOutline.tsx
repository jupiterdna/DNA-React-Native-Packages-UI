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
      <Path d="M12.75 12.266V8.17h-1.5v4.718l3.264 3.264 1.06-1.06-2.824-2.825z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-6.384 9.25H3.533a8.502 8.502 0 017.717-7.717v2.083h1.5V3.533a8.502 8.502 0 017.717 7.717h-2.083v1.5h2.083a8.502 8.502 0 01-7.717 7.717v-2.083h-1.5v2.083a8.502 8.502 0 01-7.717-7.717h2.083v-1.5z" />
    </Svg>
  );
};
const AnalogClockIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AnalogClockIconOutline;
