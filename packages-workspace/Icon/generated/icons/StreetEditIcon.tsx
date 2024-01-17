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
      <Path d="M19.668 3.71h-7.25v4.183h-1.5V3.71H3.67v16.4h7.248v-4.183h1.5v4.183h1.538v-2.468l5.712-5.72V3.71zm-8.75 10.291V9.819h1.5v4.184h-1.5z" />
      <Path d="M20.782 12.576a.925.925 0 011.309 0l.638.638a.925.925 0 010 1.308l-.497.498-1.947-1.947.497-.497zm-.93.938l1.95 1.95-4.646 4.646h-1.95v-1.95l4.646-4.646z" />
    </Svg>
  );
};
const StreetEditIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StreetEditIcon;
