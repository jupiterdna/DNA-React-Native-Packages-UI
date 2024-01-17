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
      <Path d="M2 5.44a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 5.44v7.014a5.934 5.934 0 00-1.5-.895V9.94h-17v6.85c0 .415.336.75.75.75h8.074c.043.522.152 1.025.321 1.5H4.25A2.25 2.25 0 012 16.79V5.44zm2.25-.75a.75.75 0 00-.75.75v2.5h17v-2.5a.75.75 0 00-.75-.75H4.25z" />
      <Path d="M4.75 15.69h3.977v-1.5H4.75v1.5zM18.993 16.304v-3.006h-1.5v3.006h-3.006v1.5h3.006v3.005h1.5v-3.005h3.005v-1.5h-3.005z" />
    </Svg>
  );
};
const CreditCardAddIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CreditCardAddIconOutline;
