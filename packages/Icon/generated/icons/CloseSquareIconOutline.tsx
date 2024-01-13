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
      <Path d="M13.061 12l3.6-3.6L15.6 7.34l-3.6 3.6-3.6-3.6L7.34 8.4l3.6 3.6-3.6 3.6 1.06 1.06 3.6-3.6 3.6 3.6 1.061-1.06-3.6-3.6z" />
      <Path d="M6.27 3A3.271 3.271 0 003 6.27v11.46A3.27 3.27 0 006.27 21h11.46A3.27 3.27 0 0021 17.73V6.27A3.271 3.271 0 0017.73 3H6.27zM4.5 6.27c0-.977.793-1.77 1.77-1.77h11.46c.977 0 1.77.793 1.77 1.77v11.46c0 .977-.793 1.77-1.77 1.77H6.27c-.977 0-1.77-.793-1.77-1.77V6.27z" />
    </Svg>
  );
};
const CloseSquareIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CloseSquareIconOutline;
