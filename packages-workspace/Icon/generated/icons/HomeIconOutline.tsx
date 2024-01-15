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
      <Path d="M22.526 11.021l-10.554-8.03-10.554 8.03.908 1.194 1.872-1.424v9.705h6.362V14.18h2.823v6.317h6.363v-9.705l1.872 1.424.908-1.194zm-4.28-1.372v9.347h-3.363V12.68H9.06v6.317H5.698V9.65l6.274-4.773 6.274 4.773z" />
    </Svg>
  );
};
const HomeIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default HomeIconOutline;
