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
      <Path d="M12 2.991l10.554 8.03-.909 1.194-1.872-1.424v9.705H13.41V14.18h-2.822v6.317H4.226v-9.705l-1.872 1.424-.909-1.194L12 2.991z" />
    </Svg>
  );
};
const HomeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default HomeIcon;
