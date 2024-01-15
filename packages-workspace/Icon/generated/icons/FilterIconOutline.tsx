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
      <Path d="M12 4.25l6.707.004a.85.85 0 01.668 1.374l-5.625 7.178V18.9c0 .47-.38.85-.85.85h-1.8a.85.85 0 01-.85-.85v-6.094L4.624 5.628a.85.85 0 01.668-1.374L12 4.25zM6.628 5.753l5.122 6.535v5.962h.5v-5.962l5.122-6.535H6.628z" />
    </Svg>
  );
};
const FilterIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FilterIconOutline;
