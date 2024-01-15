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
      <Path d="M4 4.25A2.25 2.25 0 016.25 2h7.66L20 8.098V19.75A2.25 2.25 0 0117.75 22H6.25A2.25 2.25 0 014 19.75V4.25zm2.25-.75a.75.75 0 00-.75.75v15.5c0 .414.336.75.75.75h11.5c.193 0 .37-.073.502-.193l-3.92-3.92a4.12 4.12 0 111.063-1.058l3.105 3.104V8.72L13.289 3.5H6.25zm3.135 9.486a2.62 2.62 0 105.24 0 2.62 2.62 0 00-5.24 0z" />
    </Svg>
  );
};
const FileFindIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileFindIconOutline;
