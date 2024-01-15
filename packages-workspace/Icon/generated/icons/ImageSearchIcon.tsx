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
      <Path d="M15.3 4.22c-1.413 0-2.653 1.092-2.653 2.493 0 1.4 1.137 2.561 2.654 2.561a2.57 2.57 0 002.56-2.561c-.083-1.376-1.147-2.493-2.56-2.493zm-4.205 2.493c0-2.238 1.947-4.052 4.206-4.052 2.258 0 4.088 1.814 4.088 4.052 0 .865-.273 1.667-.74 2.325l3.23 3.177-1.053 1.098-3.273-3.218a4.28 4.28 0 01-2.302.693c-2.367 0-4.156-1.837-4.156-4.075z" />
      <Path d="M11.018 3.39c-.619.812-.92 1.887-.994 2.915a5.258 5.258 0 001.24 3.781 5.357 5.357 0 002.773 1.725l.01.007.01-.002c.247.062.5.106.756.132.832.085 1.407.124 2.176-.162l2.205 2.297.875.93v4.077a2.25 2.25 0 01-2.25 2.25H4.333c-.014 0-.028 0-.043-.002a2.25 2.25 0 01-2.17-2.248V5.64a2.25 2.25 0 012.233-2.25h6.665zm5.94 14.14l-3.701-4.932-2.85 3.75-2.048-2.616-2.89 3.797h11.488z" />
    </Svg>
  );
};
const ImageSearchIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageSearchIcon;