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
      <Path d="M1.88 12c0-5.523 4.477-10 10-10 5.522 0 10 4.477 10 10s-4.478 10-10 10c-5.523 0-10-4.477-10-10zm5-.75v1.5h10v-1.5h-10z" />
    </Svg>
  );
};
const MinusCircleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MinusCircleIcon;
