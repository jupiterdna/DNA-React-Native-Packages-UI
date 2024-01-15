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
      <Path d="M6.33 21.356a2.635 2.635 0 002.527-1.888h2.017a.75.75 0 00.75-.75v-4.089c0-.55-.201-1.08-.565-1.492l-2.715-3.065a2.25 2.25 0 00-1.685-.758H1v1.5h1.08v2.567H1v6.087h2.804a2.635 2.635 0 002.526 1.888zm.33-10.542a.75.75 0 01.56.253l2.05 2.314H3.58v-2.567h3.08zm.804 7.908a1.134 1.134 0 11-2.267 0 1.134 1.134 0 012.267 0zM23 9.314h-.306a2.25 2.25 0 00-1.307.418l-4.078 2.909-2.972.538-.013.003c-.63.126-1.118.535-1.435.992a2.848 2.848 0 00-.514 1.594v2.95c0 .414.336.75.75.75H14.7a2.635 2.635 0 005.053 0H23V13.38h-4.147l3.404-2.428c.127-.09.28-.139.437-.139H23v-1.5zm-5.773 8.274a1.134 1.134 0 110 2.268 1.134 1.134 0 010-2.268zM15.389 2.914l-1.066 5.832-1.476-.27 1.066-5.831 1.476.27zM20.819 7.782l-4.2 2.903-.854-1.234 4.201-2.903.853 1.234zM7.115 5.277l2.902 4.201 1.234-.853-2.902-4.2-1.234.852z" />
    </Svg>
  );
};
const CarIncidentTypeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarIncidentTypeIcon;