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
      <Path d="M12 7.856a2.076 2.076 0 100 4.152 2.076 2.076 0 000-4.152z" />
      <Path d="M12.008 1.83c-4.496 0-8.168 3.572-8.168 8.01 0 2.808 1.69 5.486 3.408 7.54 1.306 1.56 2.742 2.886 3.598 3.675.27.25.482.445.615.579l.532.535.532-.535c.133-.134.347-.331.619-.582.858-.79 2.294-2.114 3.6-3.672 1.72-2.053 3.415-4.731 3.415-7.54 0-4.391-3.577-7.936-8.013-8.007l-.007-.002h-.131zM5.34 9.84c0-3.538 2.901-6.441 6.539-6.508h.132c3.695 0 6.648 2.926 6.648 6.509 0 2.25-1.389 4.575-3.065 6.575-1.231 1.47-2.508 2.647-3.375 3.446l-.226.208-.216-.2-.003-.002c-.866-.799-2.144-1.978-3.375-3.45-1.673-2.001-3.06-4.327-3.06-6.577z" />
    </Svg>
  );
};
const LocationIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationIconOutline;
