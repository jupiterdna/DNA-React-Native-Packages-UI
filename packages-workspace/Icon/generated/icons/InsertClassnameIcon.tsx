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
      <Path d="M7 3.75A2.25 2.25 0 004.75 6v12A2.25 2.25 0 007 20.25h10A2.25 2.25 0 0019.25 18V6A2.25 2.25 0 0017 3.75H7zm5.985 9.044l-2.614-1.524-2.621 1.553V5.25h5.235v7.543z" />
    </Svg>
  );
};
const InsertClassnameIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default InsertClassnameIcon;
