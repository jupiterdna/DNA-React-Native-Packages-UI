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
      <Path d="M21.71 3.354l-7.117 7.117 5.157.005-.002 1.5-7.714-.007-.002-7.717h1.5l.002 5.158 7.116-7.117 1.06 1.061zM4.257 12.02l7.714.007.003 7.717h-1.5l-.002-5.157-7.121 7.12-1.061-1.06 7.122-7.122-5.156-.005v-1.5z" />
    </Svg>
  );
};
const CollapseFullIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CollapseFullIcon;
