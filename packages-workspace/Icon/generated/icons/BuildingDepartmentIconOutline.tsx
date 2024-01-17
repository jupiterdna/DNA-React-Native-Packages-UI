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
      <Path d="M9.96 8.592h1.38V9.97H9.96V8.59zM14.037 8.592h-1.379V9.97h1.38V8.59zM9.96 11.301h1.38v1.38H9.96V11.3zM14.037 11.301h-1.379v1.38h1.38V11.3z" />
      <Path d="M16.75 18.1V5.9h-9.5v12.2h4.064v-2.747h1.372V18.1h4.064zm-8-1.5V7.4h6.5v9.2h-1.064v-2.747H9.814V16.6H8.75z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" />
    </Svg>
  );
};
const BuildingDepartmentIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BuildingDepartmentIconOutline;
