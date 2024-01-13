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
      <Path d="M4.688 10.324L1 12l11 5 11-5-3.688-1.676L12 13.648l-7.312-3.324z" />
      <Path d="M1 17l3.688-1.676L12 18.648l7.313-3.324L23 17l-11 5-11-5z" />
    </Svg>
  );
};
const TierIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TierIcon;
