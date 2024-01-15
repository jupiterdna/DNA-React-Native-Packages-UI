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
      <Path d="M19.925 10.685v6.556l-1.5-1.5v-5.056a.75.75 0 00-.75-.75H12.62l-1.5-1.5h4.252V6.052a3.372 3.372 0 00-6.741-.107L7.333 4.65a4.874 4.874 0 019.538 1.403v2.383h.804a2.25 2.25 0 012.25 2.25zM6.176 8.44L.943 3.207l1.061-1.06 20.21 20.21-1.06 1.06-1.84-1.84c-.41.436-.993.708-1.639.708H6.325a2.25 2.25 0 01-2.25-2.25v-9.35A2.25 2.25 0 016.176 8.44zm1.495 1.495H6.325a.75.75 0 00-.75.75v9.35c0 .414.336.75.75.75h11.35a.748.748 0 00.576-.27l-4.309-4.31a2.1 2.1 0 11-2.743-2.743L7.67 9.935z" />
    </Svg>
  );
};
const LockDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LockDisabledIconOutline;
