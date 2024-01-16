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
      <Path d="M14.06 10.418a.665.665 0 100-1.33.665.665 0 000 1.33zM10.605 9.753a.665.665 0 11-1.33 0 .665.665 0 011.33 0z" />
      <Path d="M14.98 12.087v.282c0 .4.325.725.725.725h.195c.4 0 .725-.325.725-.725l-.001-3.984-.999-2.757a1.125 1.125 0 00-1.058-.742H9.433c-.474 0-.897.296-1.058.742l-.999 2.757-.001 3.984c0 .4.325.725.725.725h.195c.4 0 .725-.325.725-.725v-.282h5.96zm-.027-4.644H9.047l.473-1.307h4.96l.473 1.307zm-6.328 3.394V8.693h6.75v2.144h-6.75zM16.75 16.3h-9.5v-1.5h9.5v1.5zM7.25 19.296h9.5v-1.5h-9.5v1.5z" />
      <Path d="M6.25 2A2.25 2.25 0 004 4.25v15.5A2.25 2.25 0 006.25 22h11.5A2.25 2.25 0 0020 19.75V4.25A2.25 2.25 0 0017.75 2H6.25zM5.5 4.25a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v15.5a.75.75 0 01-.75.75H6.25a.75.75 0 01-.75-.75V4.25z" />
    </Svg>
  );
};
const CarNameIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarNameIconOutline;
