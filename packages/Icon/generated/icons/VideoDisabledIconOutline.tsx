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
      <Path d="M17.327 19.046l2.614 2.614L21 20.6 2.743 2.34 1.682 3.4l.845.846a1.84 1.84 0 00-.465 1.225v12.165c0 1.022.832 1.85 1.858 1.85h12.203c.459 0 .88-.165 1.204-.44zm-1.151-1.151a.271.271 0 01-.053.005H3.92a.265.265 0 01-.266-.264V5.47c0-.03.005-.058.014-.084l12.508 12.508zM17.98 12.63v2.218l-1.591-1.592V5.471a.265.265 0 00-.266-.264H8.34L6.753 3.62h9.37c1.025 0 1.857.83 1.857 1.851v4.97l4.337-4.314v10.942l-4.337-4.44z" />
    </Svg>
  );
};
const VideoDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default VideoDisabledIconOutline;
