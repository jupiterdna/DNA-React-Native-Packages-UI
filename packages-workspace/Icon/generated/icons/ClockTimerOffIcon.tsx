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
      <Path d="M14.826 2.851H9.187v-1.5h5.64v1.5zM5.223 7.937L1.467 4.181l1.06-1.06L6.27 6.875l12.443 12.443 2.724 2.711-1.06 1.06-2.725-2.724a8.79 8.79 0 01-5.645 2.04A8.825 8.825 0 015.223 7.938zM19.852 17.63a8.785 8.785 0 00.98-4.048 8.79 8.79 0 00-2.119-5.737l1.513-1.513-1.061-1.06-1.52 1.52a8.79 8.79 0 00-5.638-2.035 8.786 8.786 0 00-4.048.98l3.298 3.298v-.369h1.5v1.87l7.095 7.093z" />
    </Svg>
  );
};
const ClockTimerOffIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ClockTimerOffIcon;
