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
      <Path d="M19 5.5h2.833v1.25H20a1 1 0 00-1 1v2.248h3.76v-1H20V7.75h1.833a1 1 0 001-1V5.5a1 1 0 00-1-1H19v1zM3.352 5l6.176 7.5L3.352 20h1.943l5.205-6.32L15.704 20h1.944l-6.177-7.5L17.648 5h-1.943L10.5 11.32 5.295 5H3.352z" />
    </Svg>
  );
};
const SuperscriptIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SuperscriptIcon;
