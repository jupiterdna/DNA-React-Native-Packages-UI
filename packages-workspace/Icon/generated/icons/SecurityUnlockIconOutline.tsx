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
      height={25}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M9.256 9.048a2.744 2.744 0 015.488 0v1.345h.229c.69 0 1.25.56 1.25 1.25v4.396c0 .69-.56 1.25-1.25 1.25H9.029c-.69 0-1.25-.56-1.25-1.25v-4.396c0-.69.56-1.25 1.25-1.25h4.215V9.048a1.244 1.244 0 10-2.488 0v.124h-1.5v-.124z" />
      <Path d="M20.16 5.78L12 2.852 3.84 5.78v6.657c0 1.95.801 4.22 2.165 6.139 1.369 1.924 3.361 3.572 5.817 4.17l.178.043.177-.043c2.456-.598 4.449-2.246 5.817-4.17 1.365-1.918 2.166-4.19 2.166-6.139V5.78zM5.34 12.437V6.836L12 4.446l6.66 2.39v5.601c0 1.578-.666 3.552-1.888 5.27-1.182 1.66-2.83 3.008-4.772 3.536-1.942-.528-3.59-1.875-4.772-3.537-1.222-1.717-1.888-3.691-1.888-5.269z" />
    </Svg>
  );
};
const SecurityUnlockIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SecurityUnlockIconOutline;
