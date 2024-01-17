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
      <Path d="M5.953 5.676a4.023 4.023 0 018.045 0v9.072h-1.5V5.677a2.523 2.523 0 00-5.045 0v10.977a4 4 0 007.044 2.596h.237v1.819a5.5 5.5 0 01-8.781-4.414V5.675zM16.953 11.498h-1.5V5.61h1.5v5.888z" />
      <Path d="M11.484 16.553v1.5h-.035a2.55 2.55 0 01-2.55-2.549V5.61h1.5v9.894a1.05 1.05 0 001.085 1.049zM16.234 20.998v-3.25h-3.25v-1.5h3.25v-3.25h1.5v3.25h3.25v1.5h-3.25v3.25h-1.5z" />
    </Svg>
  );
};
const AttachFileAddIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AttachFileAddIcon;
