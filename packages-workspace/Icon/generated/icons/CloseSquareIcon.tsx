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
      <Path d="M3 6.27A3.271 3.271 0 016.27 3h11.46A3.271 3.271 0 0121 6.27v11.46A3.271 3.271 0 0117.73 21H6.27A3.271 3.271 0 013 17.73V6.27zM13.06 12l3.601-3.6L15.6 7.34l-3.6 3.6-3.6-3.6L7.34 8.4l3.6 3.6-3.6 3.6 1.06 1.06 3.6-3.6 3.6 3.6 1.061-1.06-3.6-3.6z" />
    </Svg>
  );
};
const CloseSquareIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CloseSquareIcon;
