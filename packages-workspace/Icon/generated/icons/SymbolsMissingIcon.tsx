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
      <Path d="M4.807 12a7.193 7.193 0 1114.386 0 7.193 7.193 0 01-14.386 0zM12 1.307C6.094 1.307 1.307 6.094 1.307 12S6.094 22.693 12 22.693 22.693 17.906 22.693 12 17.906 1.307 12 1.307z" />
    </Svg>
  );
};
const SymbolsMissingIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SymbolsMissingIcon;