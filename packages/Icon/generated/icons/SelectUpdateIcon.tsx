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
      <Path d="M18.991 2.278L5.004 15.785l8.228-.011 5.765 5.948-.006-19.444zM6.004 7.946a3.289 3.289 0 01-.996-2.253 3.258 3.258 0 01.787-2.318l.21-.21h-.896v-.88l2.405-.007-.008 2.404-.866.015v-.91l-.21.21c-.39.466-.572 1.02-.548 1.66.024.64.272 1.196.744 1.668.134.135.279.248.433.34.154.091.313.166.476.223v.91a3.8 3.8 0 01-.823-.325 3.008 3.008 0 01-.708-.527zM9.225 6.4l-.008 2.406 2.405-.008v-.88h-.895l.21-.21c.562-.67.825-1.442.786-2.318a3.289 3.289 0 00-.996-2.253 3.013 3.013 0 00-.708-.527 3.814 3.814 0 00-.823-.325v.91c.163.057.322.132.477.224.154.091.298.204.433.339.471.472.72 1.028.743 1.668.024.64-.158 1.194-.548 1.66l-.21.21v-.91l-.866.015z" />
    </Svg>
  );
};
const SelectUpdateIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SelectUpdateIcon;
