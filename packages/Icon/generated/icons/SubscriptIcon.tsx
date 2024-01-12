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
      <Path d="M3.362 4l6.166 7.488L3.342 19h1.943l5.215-6.332L15.715 19h1.943l-6.186-7.512L17.638 4h-1.943L10.5 10.308 5.305 4H3.362zM19 15.504h2.833v1.25H20a1 1 0 00-1 1v2.248h3.76v-1H20v-1.249h1.833a1 1 0 001-1v-1.25a1 1 0 00-1-1H19v1z" />
    </Svg>
  );
};
const SubscriptIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SubscriptIcon;
