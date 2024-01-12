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
      <Path d="M16.203 5.28l-4.202-4.2-4.204 4.197 1.06 1.061L12 3.201l3.143 3.14 1.06-1.06zM16.203 18.72l-4.202 4.2-4.204-4.197 1.06-1.061L12 20.799l3.143-3.14 1.06 1.06z" />
      <Path d="M12 6.017l4.203 4.2-1.06 1.061L12 8.138l-3.143 3.137-1.06-1.062L12 6.017zM16.203 13.783l-4.202 4.2-4.204-4.196 1.06-1.062L12 15.863l3.143-3.141 1.06 1.061z" />
    </Svg>
  );
};
const ExpandDoubleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ExpandDoubleIcon;
