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
      <Path d="M2.875 5.125a2.25 2.25 0 012.25-2.25h13.75a2.25 2.25 0 012.25 2.25v13.75a2.25 2.25 0 01-2.25 2.25H5.125a2.25 2.25 0 01-2.25-2.25V5.125zm2.25-.75a.75.75 0 00-.75.75v3.248h4.083V4.375H5.125zm3.333 5.498H4.375v4.083h4.083V9.873zm1.5 0v4.083h4.083V9.873H9.958zm4.083-1.5V4.375H9.958v3.998h4.083zm1.5 1.5v4.083h4.084V9.873h-4.084zm4.084-1.5V5.125a.75.75 0 00-.75-.75h-3.334v3.998h4.084zM4.375 18.875c0 .414.336.75.75.75h3.333v-4.17H4.375v3.42zm5.583.75h4.083v-4.17H9.958v4.17zm5.583 0h3.334a.75.75 0 00.75-.75v-3.42h-4.084v4.17z" />
    </Svg>
  );
};
const GridOnIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default GridOnIconOutline;
