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
      <Path d="M11.749 3.09a.95.95 0 011.228 0c2.051 1.74 3.76 3.523 4.962 5.315 1.2 1.79 1.92 3.63 1.92 5.47 0 4.21-3.366 7.412-7.49 7.443h-.012c-4.124-.031-7.49-3.232-7.49-7.443 0-1.84.72-3.68 1.92-5.47C7.99 6.613 9.698 4.83 11.75 3.09zM8.984 14.579a.625.625 0 00-1.241.154l.005.038a4.368 4.368 0 004.87 3.8.625.625 0 10-.152-1.24 3.118 3.118 0 01-3.478-2.713l-.004-.039z" />
    </Svg>
  );
};
const DropIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DropIcon;
