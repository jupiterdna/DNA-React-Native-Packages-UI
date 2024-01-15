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
      <Path d="M13.359 4.78l5.673 5.672a.75.75 0 010 1.06l-2.649 2.649L9.65 7.428l2.648-2.649a.75.75 0 011.06 0zm1.964 10.441l-4.029 4.029H8.731L3.81 14.328a.75.75 0 010-1.06l4.78-4.78 6.733 6.733zm-1.908 4.029l6.677-6.677a2.25 2.25 0 000-3.182L14.42 3.72a2.25 2.25 0 00-3.182 0l-8.49 8.488a2.25 2.25 0 000 3.182L8.11 20.75h12.67v-1.5h-7.365z" />
    </Svg>
  );
};
const EraserIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default EraserIconOutline;
