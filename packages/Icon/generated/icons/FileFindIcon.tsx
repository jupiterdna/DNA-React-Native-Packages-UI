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
      <Path d="M4 4.25A2.25 2.25 0 016.25 2h7.66L20 8.098V19.75c0 .06-.002.118-.007.177l-4.598-4.598a4.12 4.12 0 10-1.063 1.058l4.981 4.981A2.243 2.243 0 0117.75 22H6.25A2.25 2.25 0 014 19.75V4.25z" />
      <Path d="M12.005 10.365a2.62 2.62 0 100 5.24 2.62 2.62 0 000-5.24z" />
    </Svg>
  );
};
const FileFindIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileFindIcon;
