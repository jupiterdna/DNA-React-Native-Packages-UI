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
      <Path d="M10.999 2.697h-8.3v8.3H11v-8.3zM10.999 12.994h-8.3v8.3H11v-8.3zM13.001 2.697h8.3v8.3H13v-8.3zM21.3 12.994h-8.299v8.3h8.3v-8.3z" />
    </Svg>
  );
};
const GridViewIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default GridViewIcon;
