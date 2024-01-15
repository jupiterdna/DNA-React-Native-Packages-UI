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
      <Path d="M12.75 14.587v-3.016h-1.5v3.016H8.233v1.5h3.017v3.016h1.5v-3.016h3.016v-1.5H12.75z" />
      <Path d="M7.128 6.029a4.872 4.872 0 119.743 0v2.383h.804a2.25 2.25 0 012.25 2.25v9.35a2.25 2.25 0 01-2.25 2.25H6.325a2.25 2.25 0 01-2.25-2.25v-9.35a2.25 2.25 0 012.25-2.25h.803V6.03zm8.243 0a3.372 3.372 0 00-6.743 0v2.383h6.743V6.03zM6.325 9.912a.75.75 0 00-.75.75v9.35c0 .414.336.75.75.75h11.35a.75.75 0 00.75-.75v-9.35a.75.75 0 00-.75-.75H6.325z" />
    </Svg>
  );
};
const LockAddIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LockAddIconOutline;
