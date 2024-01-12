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
      <Path
        fillRule="evenodd"
        d="M6.678 15.84a5.678 5.678 0 100-11.356 5.678 5.678 0 000 11.356zm0-1.5a4.178 4.178 0 100-8.356 4.178 4.178 0 000 8.356zm4.486 1.426a7.144 7.144 0 01-3.45 1.5h5.63a3.001 3.001 0 005.812 0h3.094a.75.75 0 00.75-.75v-3.36a2.75 2.75 0 00-2.21-2.697l-3.17-.634-3.4-3.4a2.25 2.25 0 00-1.591-.66h-.277c.466.602.84 1.279 1.097 2.01l3.431 3.431 3.615.724a1.25 1.25 0 011.005 1.225v2.61h-2.345a3.001 3.001 0 00-5.81 0h-2.181zm5.086-.75a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM3.504 9.804l1.06-1.06 1.364 1.363V7.346h1.5v2.762l1.364-1.364 1.06 1.06-3.174 3.175-3.174-3.175z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const DowngradeVehicleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DowngradeVehicleIconOutline;
