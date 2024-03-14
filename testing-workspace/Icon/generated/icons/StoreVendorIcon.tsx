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
      <Path d="M4.031 5.322h15.934v-1.5H4.03v1.5zM20.031 7.394H3.992L2.87 12.25v1.829h1.252v6.085H13.8v-6.085h4.592v6.085h1.5V14.08h1.263v-1.83l-1.123-4.855zM12.3 14.079v4.585H5.62v-4.585H12.3z" />
    </Svg>
  );
};
const StoreVendorIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StoreVendorIcon;
