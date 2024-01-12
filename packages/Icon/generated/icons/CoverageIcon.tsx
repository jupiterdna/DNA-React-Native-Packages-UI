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
      <Path d="M4.25 2A2.25 2.25 0 002 4.25v14a2.25 2.25 0 002.25 2.25h8.305l-.007-.01c-1.036-1.516-1.71-3.435-1.857-5.963H5.506v-1.5h5.154v-2.175H5.506v-1.5h7.81v1.489c1.242-.024 2.178-.09 3.122-.964l.386-.357V4.25A2.25 2.25 0 0014.574 2H4.25zm1.256 5.176v-1.5h7.81v1.5h-7.81z" />
      <Path d="M17.967 11.45l-.51-.472-.51.471c-1.015.94-2.324 1.217-4.05 1.249l-.737.013v.737c0 2.828.649 4.765 1.627 6.195.962 1.409 2.206 2.262 3.235 2.968l.435.299.436-.3c1.028-.705 2.272-1.558 3.235-2.966.978-1.43 1.626-3.368 1.626-6.196v-.737l-.736-.013c-1.727-.032-3.035-.308-4.051-1.249zm-1.26 3.086h1.5v1.415h1.415v1.5h-1.415v1.416h-1.5V17.45H15.29v-1.5h1.416v-1.415z" />
    </Svg>
  );
};
const CoverageIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CoverageIcon;
