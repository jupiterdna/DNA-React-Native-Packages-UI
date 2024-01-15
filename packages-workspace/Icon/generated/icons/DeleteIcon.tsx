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
      <Path d="M8.013 4.403V4.18a2.25 2.25 0 012.25-2.25h3.473a2.25 2.25 0 012.25 2.25v.223h4.264v1.5h-.968v13.154a2.25 2.25 0 01-2.25 2.25H6.978a2.25 2.25 0 01-2.25-2.25V5.903H3.75v-1.5h4.263zm1.5-.223v.223h4.973V4.18a.75.75 0 00-.75-.75h-3.473a.75.75 0 00-.75.75z" />
    </Svg>
  );
};
const DeleteIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DeleteIcon;
