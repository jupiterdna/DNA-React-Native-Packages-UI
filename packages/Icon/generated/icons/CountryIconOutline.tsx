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
      <Path d="M13.791 4.162l.49 2.052h5.648v9.797h-6.746l-.404-2.048H6.584v7.125h-1.5V4.162h8.707zm-7.207 8.301h7.428l.404 2.048h4.013V7.714h-5.332l-.49-2.052H6.584v6.801z" />
    </Svg>
  );
};
const CountryIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CountryIconOutline;
