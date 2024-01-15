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
      <Path d="M10.951 10.55a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm2.5-1a1 1 0 100 2 1 1 0 000-2z" />
      <Path d="M6.417 4.23a2.25 2.25 0 00-2.25 2.25v8.146a2.25 2.25 0 002.25 2.25h14.111a2.25 2.25 0 002.25-2.25V6.48a2.25 2.25 0 00-2.25-2.25H6.417zm-.75 2.25a.75.75 0 01.75-.75h.55a1 1 0 01-1.3 1.311V6.48zm2.877-.366c0-.13-.01-.259-.03-.384h9.917a2.5 2.5 0 002.848 2.856v3.934a2.5 2.5 0 00-2.848 2.856H8.515a2.5 2.5 0 00-2.848-2.856V8.586a2.5 2.5 0 002.877-2.472zm11.357 0c0-.137.027-.266.077-.384h.55a.75.75 0 01.75.75v.56a1 1 0 01-1.377-.927zm1 7.878c.134 0 .261.026.377.073v.561a.75.75 0 01-.75.75h-.55a1 1 0 01.924-1.384zm-13.857 1a.996.996 0 01-.076.384h-.551a.75.75 0 01-.75-.75v-.56a1 1 0 011.377.927z" />
      <Path d="M2.72 7.253V17.52c0 .415.336.75.75.75h16.228v1.5H3.471a2.25 2.25 0 01-2.25-2.25V7.253h1.5z" />
    </Svg>
  );
};
const MoneyIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MoneyIconOutline;
