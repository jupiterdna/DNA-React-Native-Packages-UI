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
      <Path d="M12.005 1.18a4.871 4.871 0 00-4.872 4.872v2.383H6.33a2.25 2.25 0 00-2.25 2.25v9.35a2.25 2.25 0 002.25 2.25h11.35a2.25 2.25 0 002.25-2.25v-9.35a2.25 2.25 0 00-2.25-2.25h-.804V6.052c0-2.69-2.18-4.872-4.871-4.872zm3.371 7.255H8.633V6.052a3.372 3.372 0 016.743 0v2.383zm-1.27 6.97a2.1 2.1 0 11-4.201-.002 2.1 2.1 0 014.2.001z" />
    </Svg>
  );
};
const LockIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LockIcon;
