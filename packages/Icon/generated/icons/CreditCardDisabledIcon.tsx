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
      <Path d="M18.319 19.38l3.147 3.146 1.06-1.06L2.534 1.474l-1.06 1.06 1.438 1.439a2.247 2.247 0 00-.908 1.806v2.5h5.215l2 2H2.004v6.85a2.25 2.25 0 002.25 2.25h14.064zM4.754 16.03v-1.5H8.73v1.5H4.754zM22.004 17.13c0 .298-.058.582-.164.843l-7.694-7.694h7.858v6.85zM22.004 8.28h-9.858l-4.75-4.75h12.358a2.25 2.25 0 012.25 2.25v2.5z" />
    </Svg>
  );
};
const CreditCardDisabledIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CreditCardDisabledIcon;
