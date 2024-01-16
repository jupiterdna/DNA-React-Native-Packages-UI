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
      <Path d="M14.875 9.125h-5.75v5.75h5.75v-5.75z" />
      <Path d="M10.719 2.7V5h2.558V2.7h1.5V5h1.973A2.25 2.25 0 0119 7.25v1.97h2.298v1.5H19v2.56h2.298v1.5H19v1.97A2.25 2.25 0 0116.75 19h-1.973v2.3h-1.5V19H10.72v2.3h-1.5V19H7.25A2.25 2.25 0 015 16.75v-1.97H2.7v-1.5H5v-2.56H2.7v-1.5H5V7.25A2.25 2.25 0 017.25 5h1.969V2.7h1.5zM6.5 7.25v9.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-9.5a.75.75 0 00-.75.75z" />
    </Svg>
  );
};
const MemoryIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MemoryIcon;
