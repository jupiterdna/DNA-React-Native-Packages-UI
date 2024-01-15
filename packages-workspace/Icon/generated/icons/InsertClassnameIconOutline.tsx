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
      <Path d="M7 3.75A2.25 2.25 0 004.75 6v12A2.25 2.25 0 007 20.25h10A2.25 2.25 0 0019.25 18V6A2.25 2.25 0 0017 3.75H7zM6.25 6A.75.75 0 017 5.25h.75v7.573l2.62-1.553 2.615 1.524V5.25H17a.75.75 0 01.75.75v12a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zm5.235-.75v4.934l-1.12-.654-1.115.66V5.25h2.235z" />
    </Svg>
  );
};
const InsertClassnameIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default InsertClassnameIconOutline;
