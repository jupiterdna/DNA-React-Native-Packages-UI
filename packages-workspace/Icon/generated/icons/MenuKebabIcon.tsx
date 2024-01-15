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
      <Path d="M11.995 6.722a2.022 2.022 0 01-1.49-.621 2.045 2.045 0 01-.616-1.494c0-.582.207-1.079.621-1.49a2.045 2.045 0 011.494-.617c.582 0 1.079.207 1.49.621.411.415.617.913.617 1.495 0 .581-.207 1.078-.622 1.49a2.045 2.045 0 01-1.494.616zM11.995 14.11a2.022 2.022 0 01-1.49-.62 2.045 2.045 0 01-.616-1.495c0-.582.207-1.078.621-1.49a2.045 2.045 0 011.494-.616c.582 0 1.079.207 1.49.621.411.415.617.912.617 1.494s-.207 1.079-.622 1.49a2.045 2.045 0 01-1.494.617zM10.506 20.879c.41.414.907.621 1.49.621.581 0 1.08-.206 1.493-.617.415-.411.622-.908.622-1.49 0-.581-.206-1.08-.617-1.494a2.023 2.023 0 00-1.49-.621c-.582 0-1.08.206-1.494.617a2.022 2.022 0 00-.621 1.49c0 .581.205 1.08.617 1.494z" />
    </Svg>
  );
};
const MenuKebabIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MenuKebabIcon;
