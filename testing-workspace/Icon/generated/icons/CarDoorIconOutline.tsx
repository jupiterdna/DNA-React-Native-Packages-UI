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
      <Path d="M14.08 14.416h5v-1.5h-5v1.5z" />
      <Path d="M7.467 5.557a5.75 5.75 0 014.266-1.894h10.33v14.424a2.25 2.25 0 01-2.25 2.25H5.864a2.25 2.25 0 01-2.154-1.599l-1.675-5.547a2.25 2.25 0 01.484-2.16l4.95-5.474zm4.266-.394a4.25 4.25 0 00-3.153 1.4l-3.467 3.835h15.45V5.163h-8.83zM3.63 12.038a.75.75 0 00-.161.72l1.675 5.546a.75.75 0 00.718.533h13.95a.75.75 0 00.75-.75v-6.19H3.758l-.126.14z" />
    </Svg>
  );
};
const CarDoorIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarDoorIconOutline;
