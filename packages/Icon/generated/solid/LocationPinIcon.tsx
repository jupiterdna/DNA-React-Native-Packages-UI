//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const LocationPinIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M4.91 9.056c0-3.714 3.144-7.225 7.095-7.225h.128l.007.002c3.89.077 6.945 3.553 6.945 7.223 0 2.4-1.49 4.551-2.97 6.155a26.87 26.87 0 01-2.19 2.092c-.272.235-.51.436-.715.608-.312.263-.545.46-.693.605l-.525.513-.524-.513c-.149-.145-.38-.34-.69-.602a74.184 74.184 0 01-.716-.611 26.8 26.8 0 01-2.188-2.092C6.397 13.607 4.91 11.455 4.91 9.056zm5.023-.15a2.066 2.066 0 104.13 0 2.066 2.066 0 00-4.13 0zM4.928 22.17h14.15v-1.5H4.928v1.5z" />
    </Svg>
  );
};
export default LocationPinIcon;
