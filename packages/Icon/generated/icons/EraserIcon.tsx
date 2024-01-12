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
      <Path d="M20.097 12.573L13.42 19.25h7.365v1.5H8.115l-5.361-5.36a2.25 2.25 0 010-3.183l8.489-8.488a2.25 2.25 0 013.181 0l5.673 5.672a2.25 2.25 0 010 3.182zM12.303 4.78L9.124 7.958l6.734 6.733 3.178-3.178a.75.75 0 000-1.061l-5.672-5.673a.75.75 0 00-1.06 0z" />
    </Svg>
  );
};
const EraserIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default EraserIcon;
