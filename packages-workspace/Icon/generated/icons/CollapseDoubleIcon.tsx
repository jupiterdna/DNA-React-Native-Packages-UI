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
      <Path d="M16.203 2.132l-4.202 4.2-4.204-4.196 1.06-1.062L12 4.21l3.143-3.14 1.06 1.06z" />
      <Path d="M16.203 7.068l-4.202 4.2-4.204-4.196 1.06-1.062L12 9.148l3.143-3.14 1.06 1.06zM16.203 16.932l-4.202-4.2-4.204 4.196 1.06 1.062L12 14.852l3.143 3.14 1.06-1.06z" />
      <Path d="M12 17.669l4.203 4.2-1.06 1.06L12 19.79l-3.143 3.137-1.06-1.062L12 17.67z" />
    </Svg>
  );
};
const CollapseDoubleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CollapseDoubleIcon;
