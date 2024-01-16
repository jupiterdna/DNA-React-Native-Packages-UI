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
      <Path d="M4.937 6.1v.26H1.68v1.5h1.003v9.29a2.25 2.25 0 002.25 2.25h5.945a2.25 2.25 0 002.25-2.25V7.86h1.002v-1.5h-3.258V6.1a1.75 1.75 0 00-1.75-1.75H6.687a1.746 1.746 0 00-1.75 1.75zm1.75-.25h2.435a.25.25 0 01.25.25v.26H6.437V6.1a.25.25 0 01.25-.25zM15.09 9.87h7.249v-1.5h-7.25v1.5zM21.297 13.954H15.09v-1.5h6.207v1.5zM15.09 18.04h4.152v-1.5H15.09v1.5z" />
    </Svg>
  );
};
const DeleteSweepIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DeleteSweepIcon;
