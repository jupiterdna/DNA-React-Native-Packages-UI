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
      <Path d="M2.226 5.75H8.25v14.975h1.5V5.75h6.024v-1.5H2.226v1.5zM17.75 13.75h2.983v-1.5h-7.465v1.5h2.982v6.975h1.5V13.75z" />
    </Svg>
  );
};
const FontSize2Icon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FontSize2Icon;
