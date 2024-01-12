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
      <Path d="M17 8.076H7v-1.5h10v1.5zM7 11.174h10v-1.5H7v1.5zM7 12.424h4v5H7v-5zM17 12.424h-4v5h4v-5z" />
      <Path d="M3.25 5.5A2.25 2.25 0 015.5 3.25h13a2.25 2.25 0 012.25 2.25v13a2.25 2.25 0 01-2.25 2.25h-13a2.25 2.25 0 01-2.25-2.25v-13zm2.25-.75a.751.751 0 00-.75.75v13c0 .414.336.75.75.75h13a.75.75 0 00.75-.75v-13a.746.746 0 00-.75-.75h-13z" />
    </Svg>
  );
};
const TemplateNameIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TemplateNameIconOutline;
