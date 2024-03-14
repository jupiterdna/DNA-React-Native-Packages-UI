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
      <Path d="M17.078 12.56h1.5v-1.5h-1.5v1.5zM18.578 17.416h-1.5v-1.5h1.5v1.5z" />
      <Path d="M.844 1.433h11.1v4.824h11.218v15.929H.844V1.433zm9.6 1.5h-3.3v3.324h3.3V2.933zm-4.8 0h-3.3v3.324h3.3V2.933zm0 4.824h-3.3v3.303h3.3V7.757zm-3.3 8.159h3.3V12.56h-3.3v3.356zm0 1.5v3.27h3.3v-3.27h-3.3zm4.8 0v3.27h3.3v-3.27h-3.3zm4.8 0v3.27h9.718V7.757h-9.719v3.303h3.139v1.5h-3.139v3.356h3.139v1.5h-3.139zm-1.5-1.5V12.56h-3.3v3.356h3.3zm-3.3-4.856h3.3V7.757h-3.3v3.303z" />
    </Svg>
  );
};
const BuildingGroupIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BuildingGroupIconOutline;
