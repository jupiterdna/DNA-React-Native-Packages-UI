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
      <Path d="M13.99 3.89H9.992v4h1.5v.55H7.945v1.556H6.45v4h1.5v.56H4.402v1.554H2.914v4h4v-4H5.402v-.553h6.092v.553h-1.5v4h4v-4h-1.5v-.553h6.092v.553h-1.5v4h4v-4h-1.5v-1.553H16.03v-.56h1.5v-4h-1.5V8.44h-3.539v-.55h1.498v-4zM8.95 13.996h1.5v-4H8.944v-.555h6.086v.555h-1.5v4h1.5v.56H8.95v-.56z" />
    </Svg>
  );
};
const ClassNameIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ClassNameIcon;
