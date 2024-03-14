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
      <Path d="M16.182 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-1.5a1 1 0 110-2 1 1 0 010 2z" />
      <Path d="M19.752 21.768a2.25 2.25 0 002.25-2.25V4.482a2.25 2.25 0 00-2.25-2.25h-7.139a2.25 2.25 0 00-2.25 2.25v15.036a2.25 2.25 0 002.25 2.25h7.139zm-7.139-1.5a.75.75 0 01-.75-.75v-.553a1 1 0 011.305 1.303h-.555zm-.75-2.848V6.615a2.5 2.5 0 002.845-2.882h-1.554a1 1 0 01-1.291 1.336v-.587a.75.75 0 01.75-.75h6.592-1.554a2.5 2.5 0 002.851 2.881v10.808a2.5 2.5 0 00-2.857 2.848h-2.931a2.5 2.5 0 00-2.85-2.849zm7.342-13.688h.547a.75.75 0 01.75.75v.584a1 1 0 01-1.297-1.334zm1.297 15.786a.75.75 0 01-.75.75h-.561a1 1 0 011.311-1.3v.55zM9.363 15.826H3.498v3.691c0 .415.336.75.75.75H9.45c.136.574.423 1.09.818 1.5h-6.02a2.25 2.25 0 01-2.25-2.25v-6.501a2.25 2.25 0 012.25-2.25h5.115v1.5H4.248a.75.75 0 00-.75.75v.81h5.865v2z" />
      <Path d="M4.402 19.14h2.78v-1h-2.78v1z" />
    </Svg>
  );
};
const PaymentMethodIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PaymentMethodIconOutline;
