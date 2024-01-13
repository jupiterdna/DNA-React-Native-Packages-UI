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
      <Path d="M12.24 4.502a7.496 7.496 0 00-6.53 3.81h3.28v1.5H3.241V4.058h1.5v2.965a8.998 8.998 0 11-1.41 6.263h1.52a7.498 7.498 0 107.388-8.784z" />
      <Path d="M12.47 6.888v4.791l3.363 3.383-1.063 1.058-3.8-3.822v-5.41h1.5z" />
    </Svg>
  );
};
const ResetIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ResetIcon;
