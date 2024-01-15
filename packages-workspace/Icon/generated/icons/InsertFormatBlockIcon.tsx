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
      <Path d="M11.745 5.74v15.025h-1.5V15.74h-.236a5.75 5.75 0 110-11.5h9.763v1.5h-3.027v15.025h-1.5V5.74h-3.5z" />
    </Svg>
  );
};
const InsertFormatBlockIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default InsertFormatBlockIcon;
