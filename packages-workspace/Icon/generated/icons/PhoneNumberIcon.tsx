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
      <Path d="M2.559 3.331a2.25 2.25 0 00-2.25 2.25v12.838a2.25 2.25 0 002.25 2.25H21.44a2.25 2.25 0 002.25-2.25V5.58a2.25 2.25 0 00-2.25-2.25H2.56zM17.95 13.786h1.637l1.732 2.27-2.125 2.123-.529-.479c-1.459-1.32-2.486-3.455-2.471-5.693a7.678 7.678 0 01.52-2.798c.435-1.132 1.12-2.142 1.951-2.896l.53-.479 2.124 2.124-1.732 2.27h-1.637c-.17.57-.26 1.17-.256 1.773v.011a6.088 6.088 0 00.256 1.774zM9.626 7.209a3.151 3.151 0 110 6.302 3.151 3.151 0 010-6.302zm0 7.78c3.136 0 5.879 1.686 7.168 4.18H2.559a.758.758 0 01-.097-.006c1.29-2.49 4.031-4.175 7.164-4.175z" />
    </Svg>
  );
};
const PhoneNumberIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PhoneNumberIcon;
