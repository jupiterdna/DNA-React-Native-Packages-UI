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
      <Path d="M4.167 6.48a2.25 2.25 0 012.25-2.25h14.111a2.25 2.25 0 012.25 2.25v8.146a2.25 2.25 0 01-2.25 2.25H6.417a2.25 2.25 0 01-2.25-2.25V6.48zm2.25-.75a.75.75 0 00-.75.75v1.343A1.75 1.75 0 007.752 5.73H6.417zm12.777 0a1.75 1.75 0 002.085 2.094V6.48a.75.75 0 00-.75-.75h-1.335zm2.084 7.553a1.75 1.75 0 00-2.085 2.094h1.335a.75.75 0 00.75-.75v-1.344zM7.752 15.376a1.75 1.75 0 00-2.085-2.094v1.344c0 .414.336.75.75.75h1.335zm3.2-4.826a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" />
      <Path d="M2.72 7.253V17.52c0 .415.336.75.75.75h16.228v1.5H3.471a2.25 2.25 0 01-2.25-2.25V7.253h1.5z" />
    </Svg>
  );
};
const MoneyIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MoneyIcon;
