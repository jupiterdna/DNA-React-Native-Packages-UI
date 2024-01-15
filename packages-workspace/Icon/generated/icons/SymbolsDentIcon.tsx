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
      <Path d="M9.526 12L1.31 3.786l2.474-2.474 8.216 8.215 8.215-8.215 2.475 2.474-8.215 8.216 8.213 8.214-2.474 2.474L12 14.476l-8.214 8.213-2.475-2.474L9.526 12z" />
    </Svg>
  );
};
const SymbolsDentIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SymbolsDentIcon;