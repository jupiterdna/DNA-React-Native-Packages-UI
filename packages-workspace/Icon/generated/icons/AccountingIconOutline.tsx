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
      <Path d="M18.75 3.093h-3.909C14.62 1.708 13.381.73 12.002.73s-2.618.978-2.84 2.363H5.25A2.25 2.25 0 003 5.343V18.22a2.25 2.25 0 002.25 2.25h6.25v-1.5H5.25a.75.75 0 01-.75-.75V5.343a.75.75 0 01.75-.75h13.5a.75.75 0 01.75.75V8.23H21V5.343a2.25 2.25 0 00-2.25-2.25zm-7.504-.159c0-.374.3-.748.75-.748.449 0 .748.374.748.748a.75.75 0 01-.749.75.75.75 0 01-.749-.75z" />
      <Path d="M13 10.73a1 1 0 011-1h8a1 1 0 011 1v11a1 1 0 01-1 1h-8a1 1 0 01-1-1v-11zm8 2.75v-1.5h-6v1.5h6zm-5 4.25a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 10-2 0 1 1 0 002 0zm-1 4a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 10-2 0 1 1 0 002 0z" />
    </Svg>
  );
};
const AccountingIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AccountingIconOutline;
