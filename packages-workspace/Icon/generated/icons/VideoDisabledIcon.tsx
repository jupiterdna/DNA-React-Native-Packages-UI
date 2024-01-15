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
      <Path d="M17.327 19.046l2.614 2.614L21 20.6 2.743 2.34 1.682 3.4l.845.846a1.84 1.84 0 00-.465 1.225v12.165c0 1.022.832 1.85 1.858 1.85h12.203c.459 0 .88-.165 1.204-.44z" />
      <Path
        fillOpacity={0.2}
        d="M17.327 19.046l2.614 2.614L21 20.6 2.743 2.34 1.682 3.4l.845.846a1.84 1.84 0 00-.465 1.225v12.165c0 1.022.832 1.85 1.858 1.85h12.203c.459 0 .88-.165 1.204-.44z"
      />
      <Path d="M17.98 12.63v2.218L6.753 3.62h9.37c1.025 0 1.857.829 1.857 1.851v4.97l4.337-4.314v10.942l-4.337-4.44z" />
      <Path
        fillOpacity={0.2}
        d="M17.98 12.63v2.218L6.753 3.62h9.37c1.025 0 1.857.829 1.857 1.851v4.97l4.337-4.314v10.942l-4.337-4.44z"
      />
    </Svg>
  );
};
const VideoDisabledIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default VideoDisabledIcon;
