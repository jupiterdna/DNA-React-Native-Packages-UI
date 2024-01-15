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
      <Path d="M2 5.44a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 5.44v2.5H2v-2.5zM2 9.94h20v2.514a5.938 5.938 0 00-9.355 6.586H4.25A2.25 2.25 0 012 16.79V9.94zm2.75 5.75h3.977v-1.5H4.75v1.5z" />
      <Path d="M18.995 16.304v-3.006h-1.5v3.006h-3.006v1.5h3.006v3.005h1.5v-3.005H22v-1.5h-3.005z" />
    </Svg>
  );
};
const CreditCardAddIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CreditCardAddIcon;
