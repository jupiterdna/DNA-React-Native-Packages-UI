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
      <Path d="M17.927 5.712L10.45 1.98 2.969 5.712A1.75 1.75 0 002 7.278l.002 7.334a2.25 2.25 0 001.847 2.213v-1.581a.75.75 0 01-.347-.633L3.5 7.278a.25.25 0 01.138-.224l6.812-3.398 6.209 3.1h2.156a1.75 1.75 0 00-.889-1.044z" />
      <Path d="M5.497 10.276a2.25 2.25 0 012.25-2.25H19.75a2.25 2.25 0 012.25 2.25v8.3a2.25 2.25 0 01-2.25 2.25H7.747a2.25 2.25 0 01-2.25-2.25v-8.3zm14.544-.2l-6.287 3.376-6.298-3.382-.094 1.652 6.393 3.432 6.38-3.425-.094-1.653z" />
    </Svg>
  );
};
const EmailMarkUnreadIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default EmailMarkUnreadIcon;
