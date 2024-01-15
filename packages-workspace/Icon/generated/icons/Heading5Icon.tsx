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
      <Path d="M2.25 4.205v15.59h1.5V12.75h7.5v7.045h1.5V4.205h-1.5v7.045h-7.5V4.205h-1.5zM16.226 8.25h5.551v1.5h-4.296l-.584 3.251a3.75 3.75 0 11-2.17 4.795l1.448-.419a2.25 2.25 0 10.822-2.748l-.368.247-1.457-.754 1.054-5.872z" />
    </Svg>
  );
};
const Heading5Icon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default Heading5Icon;
