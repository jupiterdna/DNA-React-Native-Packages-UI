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
      <Path d="M15.893 13.952h4.258v-1.5h-4.258v1.5zM20.15 16.657h-6.12v-1.5h6.12v1.5zM6.08 10.567a1.63 1.63 0 100-3.261 1.63 1.63 0 000 3.26zM10.988 15.476a1.63 1.63 0 100-3.261 1.63 1.63 0 000 3.26zM5.514 15.494l7.104-7.104-1.06-1.06-7.105 7.104 1.06 1.06z" />
      <Path d="M23.086 4.563H1.357v14.875h21.729V4.563zM2.857 17.938V6.063h18.729v11.875H2.857z" />
    </Svg>
  );
};
const RateNameIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default RateNameIconOutline;
