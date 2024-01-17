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
      <Path d="M3.672 20.099v-16.4h1.5v16.4h-1.5zM10.92 7.882V3.699h1.5v4.183h-1.5zm7.249 5.046v-9.23h1.5v9.23h-1.5zm-7.25 1.062V9.807h1.5v4.183h-1.5zm11.448 2.057l-2.387 2.387 2.387 2.388-1.06 1.06-2.388-2.387-2.387 2.387-1.06-1.06 2.386-2.387-2.387-2.388 1.06-1.06 2.388 2.387 2.387-2.387 1.06 1.06zM10.92 20.1v-4.184h1.5V20.1h-1.5z" />
    </Svg>
  );
};
const StreetRemoveIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StreetRemoveIconOutline;
