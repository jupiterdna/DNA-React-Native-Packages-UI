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
      <Path d="M12 2.53l11 18.94H1L12 2.53zm-.712 8.005v4.91h1.498v-4.91h-1.498zm.75 6.026a.875.875 0 100 1.749.875.875 0 000-1.75z" />
    </Svg>
  );
};
const WarningIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default WarningIcon;
