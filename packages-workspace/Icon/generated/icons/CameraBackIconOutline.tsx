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
      <Path d="M6.3 17.15h11.478l-3.689-4.935-2.857 3.753-2.05-2.607L6.3 17.149z" />
      <Path d="M14.701 2.968H9.3L7.262 5.213H4.27a2.25 2.25 0 00-2.25 2.25v11.319a2.25 2.25 0 002.25 2.25H19.73a2.25 2.25 0 002.25-2.25V7.462a2.25 2.25 0 00-2.25-2.25h-2.992l-2.037-2.244zM7.926 6.713l2.037-2.245h4.074l2.037 2.245h3.655a.75.75 0 01.75.75v11.319a.75.75 0 01-.75.75H4.272a.75.75 0 01-.75-.75V7.462a.75.75 0 01.75-.75h3.655z" />
    </Svg>
  );
};
const CameraBackIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CameraBackIconOutline;
