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
      <Path d="M17.237 3.235a.75.75 0 011.06 0L20.762 5.7a.75.75 0 010 1.06l-3.336 3.337 2.145 2.15-1.061 1.059-1.637-1.64-9.32 9.319-4.508-.026-.025-4.507 9.325-9.325-1.635-1.638 1.062-1.06 2.134 2.14 3.332-3.333zm-.871 5.799l2.804-2.805-1.403-1.403-2.803 2.803 1.402 1.405zm-2.972-.837l-8.872 8.872.014 2.398 2.398.013 8.872-8.872-2.412-2.411z" />
    </Svg>
  );
};
const ColorPickerIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ColorPickerIconOutline;
