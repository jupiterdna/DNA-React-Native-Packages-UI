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
      <Path d="M19.927 3.596H4.072v-1.5h15.855v1.5zM12 5.89l3.788 3.785-1.06 1.061L12.75 8.76v6.482l1.977-1.976 1.06 1.061L12 18.112l-3.788-3.781 1.06-1.062 1.978 1.975V8.759l-1.978 1.975-1.06-1.062L12 5.891zM4.072 21.903h15.855v-1.5H4.072v1.5z" />
    </Svg>
  );
};
const ExpandIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ExpandIcon;
