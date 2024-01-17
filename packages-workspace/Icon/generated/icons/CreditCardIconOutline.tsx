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
      <Path d="M4.75 16.575h3.977v-1.5H4.75v1.5z" />
      <Path d="M2 6.325a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 6.325v11.35a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 17.675V6.325zm2.25-.75a.75.75 0 00-.75.75v2.5h17v-2.5a.75.75 0 00-.75-.75H4.25zm-.75 12.1c0 .414.336.75.75.75h15.5a.75.75 0 00.75-.75v-6.85h-17v6.85z" />
    </Svg>
  );
};
const CreditCardIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CreditCardIconOutline;
