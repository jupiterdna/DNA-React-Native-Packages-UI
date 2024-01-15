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
      <Path d="M9.932 18.164A6.5 6.5 0 018.05 6.838v2.85h1.5V4.373H4.238v1.5h2.62A8 8 0 009.932 19.73c-.002-.408 0-1.013 0-1.566zM17.053 18.205h2.633v1.5h-5.313v-5.313h1.5v2.832a6.5 6.5 0 00-1.871-11.41v-1.56a8 8 0 013.051 13.952z" />
    </Svg>
  );
};
const ArrowSwapIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ArrowSwapIcon;
