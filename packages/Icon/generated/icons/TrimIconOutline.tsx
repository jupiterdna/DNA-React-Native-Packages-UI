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
      <Path d="M11.25 1.99v20.02h1.5V1.99h-1.5zM7.76 5.26V18.74H6.467V5.261H7.76zm-2.793-1.5V20.24H9.26V3.761H4.967zm12.566 1.5V18.74H16.24V5.261h1.293zm-2.793-1.5V20.24h4.293V3.761H14.74z" />
    </Svg>
  );
};
const TrimIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TrimIconOutline;
