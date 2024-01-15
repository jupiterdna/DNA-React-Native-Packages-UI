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
      <Path d="M4.25 2A2.25 2.25 0 002 4.25v15.5A2.25 2.25 0 004.25 22h15.5A2.25 2.25 0 0022 19.75V4.25A2.25 2.25 0 0019.75 2H4.25zm3.96 5.055a2.107 2.107 0 114.215 0 2.107 2.107 0 01-4.214 0zm1.03 2.662c.285-.044.58-.072.881-.08l.197-.003c.909 0 1.778.176 2.444.464.33.143.644.327.888.56.106.101.213.225.297.371h-7.26a1.92 1.92 0 01.297-.371 2.47 2.47 0 01.45-.336c.14-.084.289-.158.441-.224.395-.17.861-.302 1.365-.38zm10.01 3.812h-.674v5.524H5.426V13.53H4.75v-1.5h14.5v1.5z" />
    </Svg>
  );
};
const CounterSquareIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CounterSquareIcon;
