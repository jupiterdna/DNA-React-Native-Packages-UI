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
      <Path d="M9.18 2.851h5.64v-1.5H9.18v1.5zM18.706 7.846l1.514-1.514-1.06-1.06-1.522 1.52A8.79 8.79 0 0012 4.758a8.787 8.787 0 00-4.047.98l1.125 1.126a7.325 7.325 0 019.641 9.641l1.125 1.125a8.788 8.788 0 00.98-4.047 8.79 8.79 0 00-2.118-5.736zM5.216 7.937L1.46 4.18l1.06-1.06 18.91 18.91-1.06 1.06-2.725-2.725A8.825 8.825 0 015.216 7.937zm1.066 1.066A7.325 7.325 0 0016.58 19.3L6.282 9.003z" />
      <Path d="M12.75 8.666v1.869l-1.5-1.5v-.369h1.5z" />
    </Svg>
  );
};
const ClockTimerOffIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ClockTimerOffIconOutline;
