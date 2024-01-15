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
      <Path d="M10.011 5.86L7.171 8.7h7.279a5.25 5.25 0 110 10.5H7.198v-1.5h7.252a3.75 3.75 0 000-7.5H7.17l2.84 2.84-1.06 1.061L4.3 9.451 8.95 4.8l1.061 1.06z" />
    </Svg>
  );
};
const UndoIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UndoIcon;
