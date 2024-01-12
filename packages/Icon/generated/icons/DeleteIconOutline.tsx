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
      <Path d="M10.263 3.426h3.473a.75.75 0 01.75.75v.223H9.513v-.223a.75.75 0 01.75-.75zm5.723.973v-.223a2.25 2.25 0 00-2.25-2.25h-3.473a2.25 2.25 0 00-2.25 2.25v.223H3.75v1.5h.978v13.154a2.25 2.25 0 002.25 2.25h10.054a2.25 2.25 0 002.25-2.25V5.899h.968v-1.5h-4.264zm1.796 1.5v13.154a.75.75 0 01-.75.75H6.978a.75.75 0 01-.75-.75V5.899h11.554z" />
    </Svg>
  );
};
const DeleteIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DeleteIconOutline;
