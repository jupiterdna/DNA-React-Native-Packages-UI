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
      <Path d="M14.546 9.403L12 3.407 9.454 9.403l-6.49.569 4.916 4.274-1.464 6.347 4.957-2.977v-2.167h3.04v-3.041h3.82l2.802-2.436-6.489-.57z" />
      <Path d="M17.414 16.948v-3.04h-1.5v3.04h-3.041v1.5h3.04v3.041h1.5v-3.04h3.041v-1.5h-3.04z" />
    </Svg>
  );
};
const StarExtraIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StarExtraIcon;
