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
        d="M6.678 15.84a5.678 5.678 0 100-11.356 5.678 5.678 0 000 11.356zm2.114-4.26l1.06-1.061-3.174-3.174-3.174 3.174 1.06 1.06 1.365-1.363v2.761h1.5v-2.76l1.363 1.363zm5.064-1.418a7.18 7.18 0 01-6.142 7.104h5.63a3.001 3.001 0 005.811 0h3.095a.75.75 0 00.75-.75v-3.36a2.75 2.75 0 00-2.21-2.697l-3.17-.634-3.4-3.4a2.25 2.25 0 00-1.591-.66h-.277a7.147 7.147 0 011.504 4.397zm3.894 6.354a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const UpgradeVehicleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UpgradeVehicleIcon;
