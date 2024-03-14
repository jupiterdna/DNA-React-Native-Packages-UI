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
      <Path d="M18.298 3.235a.75.75 0 00-1.061 0l-3.332 3.332-2.134-2.139-1.062 1.06 1.635 1.638-9.325 9.325.025 4.507 4.508.026 9.32-9.32 1.637 1.641 1.061-1.06-2.145-2.15 3.336-3.335a.75.75 0 000-1.06l-2.463-2.465zm-4.904 4.962l2.412 2.411-8.872 8.872-2.398-.013-.014-2.398 8.872-8.872z" />
    </Svg>
  );
};
const ColorPickerIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ColorPickerIcon;
