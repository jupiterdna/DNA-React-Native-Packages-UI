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
      <Path d="M18.678 3.804l3.76 3.566L9.556 20.22 1.63 12.378l3.721-3.68 4.183 4.25 9.143-9.144zm.028 2.094l-9.18 9.18-4.188-4.256-1.574 1.557 5.788 5.727 10.735-10.71-1.581-1.498z" />
    </Svg>
  );
};
const CheckIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CheckIconOutline;
