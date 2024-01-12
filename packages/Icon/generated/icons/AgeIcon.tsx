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
      <Path d="M9.133 14.061L12 11.221l2.867 2.84H9.133zM12 18.759l2.867-2.84H9.133L12 18.759z" />
      <Path d="M16.419 3.989H7.58V2.011h-1.5v1.978H5.25A2.25 2.25 0 003 6.239v13.5a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-13.5a2.25 2.25 0 00-2.25-2.25h-.831V2.011h-1.5v1.978zM4.5 9.489h15v10.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.489z" />
    </Svg>
  );
};
const AgeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AgeIcon;
