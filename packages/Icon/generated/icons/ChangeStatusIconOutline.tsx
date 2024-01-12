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
      <Path d="M9.607 3.492c-.69 0-1.25.56-1.25 1.251v4.205a9.488 9.488 0 00-1.502-.12V4.744a2.753 2.753 0 012.752-2.752h7.167l6.095 6.104v11.162a2.753 2.753 0 01-2.752 2.752h-5.811v-1.501h5.81c.692 0 1.252-.56 1.252-1.251V9.883h-6.394v-6.39H9.607zm6.868.324v4.566h4.56l-4.56-4.566zM1.135 16.481c.066 1.499.634 2.783 1.705 3.854.362.362.765.662 1.21.901.445.239.914.424 1.408.556v-1.556a4.6 4.6 0 01-.815-.383 3.787 3.787 0 01-.741-.58c-.807-.807-1.231-1.758-1.272-2.853-.042-1.096.271-2.042.938-2.841l.358-.358v1.556l1.482-.025.013-4.112-4.113.012v1.507H2.84l-.359.358c-.963 1.144-1.412 2.466-1.346 3.964z" />
      <Path d="M8.335 21.804l.012-4.112 1.482-.025v1.556l.358-.358c.667-.799.98-1.746.939-2.84-.041-1.096-.465-2.047-1.272-2.853a3.773 3.773 0 00-.74-.581 4.597 4.597 0 00-.816-.383v-1.556c.494.132.963.317 1.408.556.444.239.848.54 1.21.901 1.07 1.07 1.638 2.355 1.704 3.854.066 1.498-.383 2.82-1.346 3.964l-.358.358h1.531v1.507l-4.112.012z" />
    </Svg>
  );
};
const ChangeStatusIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChangeStatusIconOutline;
