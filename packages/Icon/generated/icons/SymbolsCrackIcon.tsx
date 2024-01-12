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
      <Path d="M12 6.025l3.364 2.436 3.346 2.44-1.273 3.94-.003.012-1.287 3.936-4.141.007h-.012l-4.142-.007-1.286-3.936L5.289 10.9 8.64 8.457 12 6.025zm5.416-.4L12 1.706l-5.417 3.92-5.403 3.94 2.056 6.364 2.077 6.356 6.687.011 6.687-.01 2.077-6.357 2.056-6.364-5.404-3.94z" />
    </Svg>
  );
};
const SymbolsCrackIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SymbolsCrackIcon;
