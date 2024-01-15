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
      <Path d="M15.27 16.575h3.976v-1.5H15.27v1.5zM9.5 10.45H4.75V7.2H9.5v3.25z" />
      <Path d="M2 6.325a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 6.325v11.35a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 17.675V6.325zm2.25-.75a.75.75 0 00-.75.75v11.35c0 .414.336.75.75.75h15.5a.75.75 0 00.75-.75V6.325a.75.75 0 00-.75-.75H4.25z" />
    </Svg>
  );
};
const CreditCardExpiryDateIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CreditCardExpiryDateIconOutline;
