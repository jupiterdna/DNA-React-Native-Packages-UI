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
      <Path d="M12 17.504a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2z" />
      <Path d="M7.128 6.051a4.871 4.871 0 119.743 0v2.384h.804a2.25 2.25 0 012.25 2.25v9.35a2.25 2.25 0 01-2.25 2.25H6.325a2.25 2.25 0 01-2.25-2.25v-9.35a2.25 2.25 0 012.25-2.25h9.046V6.05a3.372 3.372 0 00-6.743 0h-1.5zm-.803 3.884a.75.75 0 00-.75.75v9.35a.75.75 0 00.75.75h11.35a.75.75 0 00.75-.75v-9.35a.75.75 0 00-.75-.75H6.325z" />
    </Svg>
  );
};
const LockOpenIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LockOpenIconOutline;
