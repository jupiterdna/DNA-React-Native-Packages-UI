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
      <Path d="M13.134 5.332l5.534.002.005 5.532-1.5.001-.004-4.034-4.036-.001.001-1.5zM10.865 18.668l-5.534-.002-.005-5.532 1.5-.001.004 4.034 4.036.001v1.5z" />
    </Svg>
  );
};
const ExpandContentIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ExpandContentIcon;
