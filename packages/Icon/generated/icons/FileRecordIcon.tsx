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
      <Path d="M6.25 2A2.25 2.25 0 004 4.25v9.97h9.478c.859 0 1.668.4 2.188 1.083l3.728 4.895.004.005.39.503c.136-.29.212-.614.212-.956V4.25A2.25 2.25 0 0017.75 2H6.25zM8 11.75v-1.5h8v1.5H8zm8-4H8v-1.5h8v1.5z" />
      <Path d="M18.722 21.78l-.518-.669-3.731-4.9a1.25 1.25 0 00-.995-.492H4v4.031A2.25 2.25 0 006.25 22h11.5c.348 0 .678-.08.972-.22z" />
    </Svg>
  );
};
const FileRecordIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileRecordIcon;
