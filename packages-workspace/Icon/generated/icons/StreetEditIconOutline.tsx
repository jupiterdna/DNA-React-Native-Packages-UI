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
      <Path d="M3.672 20.113v-16.4h1.5v16.4h-1.5zM10.92 7.896V3.713h1.5v4.183h-1.5zM10.92 14.004V9.821h1.5v4.183h-1.5zM10.92 20.113V15.93h1.5v4.183h-1.5zM20.785 12.579a.925.925 0 011.309 0l.638.638a.925.925 0 010 1.308l-.497.497-1.947-1.946.497-.497zM19.855 13.517l1.95 1.95-4.646 4.646h-1.95v-1.95l4.646-4.646zM18.17 13.434V3.713h1.5v8.213l-1.5 1.508z" />
    </Svg>
  );
};
const StreetEditIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StreetEditIconOutline;
