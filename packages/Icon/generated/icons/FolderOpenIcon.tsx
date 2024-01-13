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
      <Path d="M3.531 7.84l-.004 10.097c0 .383.287.699.658.744l2.417-8.206h16.623l-2.385 8.098a2.25 2.25 0 01-2.158 1.614H4.277a2.25 2.25 0 01-2.25-2.25l.005-11.614a2.25 2.25 0 012.25-2.249h5.337l2.252 2.265h7.851c.98 0 1.813.627 2.122 1.5H3.531z" />
    </Svg>
  );
};
const FolderOpenIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FolderOpenIcon;
