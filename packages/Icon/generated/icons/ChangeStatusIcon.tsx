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
      <Path d="M6.855 4.743a2.753 2.753 0 012.753-2.752h7.167l6.095 6.104v11.162a2.752 2.752 0 01-2.753 2.752H14.31a9.379 9.379 0 001.964-5.758 9.42 9.42 0 00-9.419-9.42V4.744zm9.62 3.639h4.56l-4.56-4.566v4.566zM2.842 20.34c-1.07-1.07-1.639-2.355-1.705-3.854-.066-1.498.383-2.82 1.346-3.964l.359-.358H1.31v-1.507l4.113-.012-.013 4.112-1.482.025v-1.556l-.358.358c-.667.799-.98 1.745-.938 2.84.04 1.096.465 2.047 1.272 2.853.23.23.477.425.74.581a4.6 4.6 0 00.816.383v1.556a6.497 6.497 0 01-1.408-.556 5.146 5.146 0 01-1.21-.901zm5.507-2.643l-.012 4.112 4.112-.012V20.29h-1.531l.358-.358c.963-1.144 1.412-2.466 1.346-3.964-.066-1.499-.634-2.783-1.704-3.854a5.155 5.155 0 00-1.21-.901 6.518 6.518 0 00-1.408-.556v1.556c.28.099.551.226.815.383.263.156.51.35.74.58.807.807 1.232 1.758 1.273 2.853.04 1.095-.272 2.042-.939 2.84l-.358.359v-1.556l-1.482.024z" />
    </Svg>
  );
};
const ChangeStatusIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChangeStatusIcon;
