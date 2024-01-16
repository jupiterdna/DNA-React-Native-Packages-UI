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
      <Path d="M9.476 2.41a2.25 2.25 0 00-2.25 2.25v1.766H3.639a2.25 2.25 0 00-2.25 2.25v9.723a2.25 2.25 0 002.25 2.25h6.778a6.748 6.748 0 01-.401-1.5H3.639a.75.75 0 01-.75-.75v-6.29h16.866c.069.034.136.067.204.098.192.092.38.18.56.302V8.676a2.25 2.25 0 00-2.25-2.25h-3.587V4.66a2.25 2.25 0 00-2.25-2.25H9.476zm3.706 4.016H8.726V4.66a.75.75 0 01.75-.75h2.956a.75.75 0 01.75.75v1.766zm5.837 4.183H2.89V8.676a.75.75 0 01.75-.75h14.63a.75.75 0 01.75.75v1.933z" />
      <Path d="M11.943 18.152a4.793 4.793 0 118.684 2.8l1.984 1.984-1.06 1.06-1.98-1.979a4.793 4.793 0 01-7.628-3.865zm4.793-3.293a3.293 3.293 0 100 6.586 3.293 3.293 0 000-6.586z" />
    </Svg>
  );
};
const SearchJobsIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SearchJobsIconOutline;
