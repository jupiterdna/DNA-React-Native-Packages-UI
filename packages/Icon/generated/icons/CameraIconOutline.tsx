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
      <Path d="M9.299 2.968H14.7l2.037 2.245h2.992a2.25 2.25 0 012.25 2.25v11.319a2.25 2.25 0 01-2.25 2.25H4.27a2.25 2.25 0 01-2.25-2.25V7.462a2.25 2.25 0 012.25-2.25h2.992l2.037-2.244zm.664 1.5L7.926 6.713H4.27a.75.75 0 00-.75.75v11.319c0 .414.335.75.75.75H19.73a.75.75 0 00.75-.75V7.462a.75.75 0 00-.75-.75h-3.656l-2.037-2.244H9.963z" />
      <Path d="M12.004 10.45a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25zm-4.125 2.625a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z" />
    </Svg>
  );
};
const CameraIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CameraIconOutline;
