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
      <Path d="M11.34 8.592H9.96V9.97h1.38V8.59zM12.658 8.592h1.38V9.97h-1.38V8.59zM11.34 11.301H9.96v1.38h1.38V11.3zM12.658 11.301h1.38v1.38h-1.38V11.3z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.75 16.1h-4.064v-2.747h-1.372V18.1H7.25V5.9h9.5v12.2z" />
    </Svg>
  );
};
const BuildingDepartmentIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BuildingDepartmentIcon;
