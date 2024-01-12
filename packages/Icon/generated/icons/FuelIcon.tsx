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
      <Path d="M5.45 2.7a2 2 0 00-2 2v16.6h10.44v-7.69h.789a.75.75 0 01.75.754l-.023 4.31a2.573 2.573 0 105.145.013V8.765h-.004a2.599 2.599 0 00-.883-1.853L15.97 3.219l-1.06 1.06 2.14 2.142a2.606 2.606 0 102 4.807v7.46a1.073 1.073 0 11-2.145-.006l.023-4.31a2.25 2.25 0 00-2.25-2.262h-.788V4.7a2 2 0 00-2-2H5.449zm6.44 1.5a.5.5 0 01.5.5v5.51H4.95V4.7a.5.5 0 01.5-.5h6.44zm7.16 4.669a1.105 1.105 0 11-.405-.855l.097.098.003-.004a1.1 1.1 0 01.304.76z" />
    </Svg>
  );
};
const FuelIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FuelIcon;
