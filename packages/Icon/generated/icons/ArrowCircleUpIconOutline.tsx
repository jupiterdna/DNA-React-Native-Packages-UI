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
      <Path d="M9.3 13.093l-1.06-1.06L12 8.271l3.76 3.76-1.06 1.06-1.95-1.949v4.713h-1.5v-4.713l-1.95 1.95z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm8.5 10a8.5 8.5 0 10-17 0 8.5 8.5 0 0017 0z" />
    </Svg>
  );
};
const ArrowCircleUpIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ArrowCircleUpIconOutline;
