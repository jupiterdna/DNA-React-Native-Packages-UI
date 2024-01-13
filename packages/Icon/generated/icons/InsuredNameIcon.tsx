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
      <Path d="M4.4 1.545a2.25 2.25 0 00-2.25 2.25v15.5a2.25 2.25 0 002.25 2.25h9.023a9.03 9.03 0 01-.949-1.163 9.07 9.07 0 01-1.084-2.167H5.096v-1.5h5.896a13.368 13.368 0 01-.201-1.547H5.096v-1.5h5.653v-1.547H5.096v-1.5h7.799v1.056l.111-.002c1.408-.027 2.057-.255 2.506-.67l1.562-1.446 1.076.996V7.644l-6.09-6.099H4.4zM16.317 7.93h-4.555V3.37l4.555 4.561zm1.267 4.212l-.51-.472-.51.472c-.875.81-2.007 1.054-3.529 1.082l-.736.014v.736c0 2.518.577 4.25 1.455 5.534.861 1.26 1.973 2.023 2.883 2.646l.437.3.438-.3c.91-.624 2.021-1.387 2.883-2.646.877-1.284 1.455-3.016 1.455-5.534v-.736l-.737-.014c-1.522-.028-2.654-.272-3.53-1.082zm1.563 3.842l-2.41 2.41-1.322-1.314.705-.71.615.612 1.705-1.705.707.707z" />
    </Svg>
  );
};
const InsuredNameIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default InsuredNameIcon;
