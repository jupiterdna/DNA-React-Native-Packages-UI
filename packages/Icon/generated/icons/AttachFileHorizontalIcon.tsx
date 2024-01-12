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
      <Path d="M18.227 6.5a4.023 4.023 0 010 8.045H8.4a2.55 2.55 0 110-5.099h9.894v1.5H8.399a1.05 1.05 0 100 2.1h9.829a2.523 2.523 0 000-5.046H7.25a4 4 0 100 8h11.043v1.5H7.25a5.5 5.5 0 110-11h10.977z" />
    </Svg>
  );
};
const AttachFileHorizontalIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AttachFileHorizontalIcon;
