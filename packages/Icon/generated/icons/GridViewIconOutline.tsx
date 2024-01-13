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
      <Path d="M11 2.697H2.7v8.3H11v-8.3zm-6.8 6.8v-5.3h5.3v5.3H4.2zM11 12.994H2.7v8.3H11v-8.3zm-6.8 6.8v-5.3h5.3v5.3H4.2zM13.001 2.697h8.3v8.3h-8.3v-8.3zm1.5 1.5v5.3h5.3v-5.3h-5.3zM21.301 12.994h-8.3v8.3h8.3v-8.3zm-6.8 6.8v-5.3h5.3v5.3h-5.3z" />
    </Svg>
  );
};
const GridViewIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default GridViewIconOutline;
