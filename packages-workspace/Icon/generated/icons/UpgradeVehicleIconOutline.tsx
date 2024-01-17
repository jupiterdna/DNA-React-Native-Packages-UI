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
        d="M6.678 15.84a5.678 5.678 0 100-11.356 5.678 5.678 0 000 11.356zm0-1.5a4.178 4.178 0 100-8.356 4.178 4.178 0 000 8.356zm2.114-2.76l1.06-1.06-3.174-3.174-3.174 3.174 1.06 1.06 1.365-1.363v2.761h1.5v-2.76l1.363 1.363zm8.088-.373l-3.43-3.431a7.163 7.163 0 00-1.098-2.01h.277c.596 0 1.169.237 1.59.659l3.4 3.4 3.17.634A2.75 2.75 0 0123 13.155v3.36a.75.75 0 01-.75.75h-3.094a3.001 3.001 0 01-5.81 0H7.713a7.144 7.144 0 003.45-1.5h2.18a3.001 3.001 0 015.811 0H21.5v-2.61a1.25 1.25 0 00-1.005-1.225l-3.615-.723zm.87 5.309a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const UpgradeVehicleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UpgradeVehicleIconOutline;
