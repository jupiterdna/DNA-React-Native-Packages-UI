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
      <Path d="M4.25 4.075A2.25 2.25 0 002 6.325v11.35a2.25 2.25 0 002.25 2.25h15.5a2.25 2.25 0 002.25-2.25V6.325a2.25 2.25 0 00-2.25-2.25H4.25zm-.64 1.86a.75.75 0 01.64-.36h15.5a.75.75 0 01.644.366l-8.387 5.24L3.61 5.934zm-.11 1.7l8.507 5.315L20.5 7.643v10.032a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75V7.635z" />
    </Svg>
  );
};
const MailIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MailIconOutline;
