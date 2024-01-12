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
      <Path d="M12.755 11.122l1.94 1.956 1.066-1.056-3.756-3.786-3.756 3.786 1.065 1.056 1.941-1.956v4.754h1.5v-4.754z" />
      <Path d="M8.013 4.172v.223H3.75v1.5h.978v13.154a2.25 2.25 0 002.25 2.25h10.054a2.25 2.25 0 002.25-2.25V5.895h.968v-1.5h-4.264v-.223a2.25 2.25 0 00-2.25-2.25h-3.473a2.25 2.25 0 00-2.25 2.25zm2.25-.75h3.473a.75.75 0 01.75.75v.223H9.513v-.223a.75.75 0 01.75-.75zm7.52 2.473v13.154a.75.75 0 01-.75.75H6.977a.75.75 0 01-.75-.75V5.895h11.554z" />
    </Svg>
  );
};
const DeleteRestoreIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DeleteRestoreIconOutline;
