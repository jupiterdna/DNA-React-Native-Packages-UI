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
      <Path d="M4.754 16.03H8.73v-1.5H4.754v1.5z" />
      <Path d="M18.319 19.38l3.147 3.146 1.06-1.06L2.534 1.474l-1.06 1.06 1.438 1.439a2.247 2.247 0 00-.908 1.806v11.35a2.25 2.25 0 002.25 2.25h14.064zm-1.5-1.5H4.254a.75.75 0 01-.75-.75v-6.85h5.715l7.6 7.6zm-9.6-9.6H3.504v-2.5a.75.75 0 01.505-.71l3.21 3.21zM22.004 17.13c0 .298-.058.582-.164.843l-1.336-1.336v-6.358h-6.358l-2-2h8.358v-2.5a.75.75 0 00-.75-.75H8.896l-1.5-1.5h12.358a2.25 2.25 0 012.25 2.25v11.35z" />
    </Svg>
  );
};
const CreditCardDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CreditCardDisabledIconOutline;
