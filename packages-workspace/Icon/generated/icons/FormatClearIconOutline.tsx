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
      <Path d="M19.255 20.314l-6.761-6.76-1.132 6.438H9.84l1.36-7.734-7.513-7.513 1.062-1.059 11.506 11.506 4.061 4.061-1.06 1.06zM13.234 9.345l.677-3.853h6.087v-1.5H7.88l1.5 1.5h3.008l-.45 2.558 1.296 1.295z" />
    </Svg>
  );
};
const FormatClearIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FormatClearIconOutline;
