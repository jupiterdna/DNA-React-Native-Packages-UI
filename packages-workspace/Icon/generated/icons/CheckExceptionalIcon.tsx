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
      <Path d="M3.96 9.387L1.431 12l2.527 2.613-.509 3.599 3.58.628 1.704 3.211L12 20.455l3.266 1.596 1.704-3.21 3.58-.629-.509-3.6L22.57 12 20.04 9.387l.51-3.599-3.581-.628-1.704-3.211L12 3.545 8.734 1.95l-1.703 3.21-3.58.629.508 3.6zm6.888 6.331l-3.743-3.743 1.061-1.06 2.682 2.682 4.986-4.987 1.061 1.06-6.047 6.048z" />
    </Svg>
  );
};
const CheckExceptionalIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CheckExceptionalIcon;
