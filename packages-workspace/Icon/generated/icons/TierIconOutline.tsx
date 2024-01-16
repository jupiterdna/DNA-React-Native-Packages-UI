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
      <Path d="M12 2l11 5-11 5L1 7l11-5z" />
      <Path d="M4.688 10.324L1 12l11 5 11-5-3.688-1.676-1.812.824 1.875.852L12 15.352 4.625 12l1.875-.852-1.812-.824z" />
      <Path d="M4.688 15.324l1.812.824L4.625 17 12 20.352 19.375 17l-1.875-.852 1.813-.824L23 17l-11 5-11-5 3.688-1.676z" />
    </Svg>
  );
};
const TierIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TierIconOutline;
