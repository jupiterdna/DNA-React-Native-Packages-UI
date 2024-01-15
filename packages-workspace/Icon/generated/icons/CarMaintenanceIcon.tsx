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
      <Path d="M18.802 2.989c.286.025.628.15.763.209l.002-.002.29.132a5.347 5.347 0 01-.039 9.76v7.173a.75.75 0 01-.75.75h-2.834a.75.75 0 01-.75-.75v-7.173a5.347 5.347 0 01-.04-9.76l.291-.132.002.002c.136-.06.478-.184.764-.21h.003v4.6h2.294v-4.6h.004z" />
      <Path d="M9.78 7.92c.3-.3.675-.507 1.08-.601a6.84 6.84 0 003.124 6.66v4.781h-3.329a3.001 3.001 0 01-5.81 0H1.75a.75.75 0 01-.75-.75v-3.36c0-1.311.925-2.44 2.21-2.697l3.17-.634 3.4-3.4zm-2.03 8.59a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </Svg>
  );
};
const CarMaintenanceIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarMaintenanceIcon;
