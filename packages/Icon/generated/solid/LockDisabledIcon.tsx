//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const LockDisabledIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M19.922 10.685v6.556l-8.806-8.806h4.252V6.052a3.372 3.372 0 00-6.741-.107L7.33 4.65a4.874 4.874 0 019.538 1.403v2.383h.804a2.25 2.25 0 012.25 2.25zM6.173 8.44L.94 3.207l1.061-1.06 20.21 20.21-1.06 1.06-1.84-1.84c-.41.436-.993.708-1.639.708H6.322a2.25 2.25 0 01-2.25-2.25v-9.35A2.25 2.25 0 016.173 8.44zm5.023 5.022a2.1 2.1 0 102.743 2.744l-2.743-2.744z" />
    </Svg>
  );
};
export default LockDisabledIcon;
