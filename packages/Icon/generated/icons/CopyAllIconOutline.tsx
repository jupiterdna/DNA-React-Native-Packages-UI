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
      <Path d="M8.924 2a2.25 2.25 0 00-2.25 2.25v12.49a2.25 2.25 0 002.25 2.25h9.162a2.25 2.25 0 002.25-2.25V4.25A2.25 2.25 0 0018.086 2H8.924zm-.75 2.25a.75.75 0 01.75-.75h9.162a.75.75 0 01.75.75v12.49a.75.75 0 01-.75.75H8.924a.75.75 0 01-.75-.75V4.25zM5.164 8.047V6.223h-1.5v1.824h1.5zM3.664 9.658v2.148h1.5V9.658h-1.5zM3.664 13.416v2.148h1.5v-2.148h-1.5zM3.664 17.175v1.074c0 .582.133 1.135.371 1.628l1.351-.652a2.238 2.238 0 01-.222-.976v-1.074h-1.5zM5.786 21.628A3.737 3.737 0 007.414 22h1.17v-1.5h-1.17c-.351 0-.682-.08-.976-.222l-.652 1.351zM10.339 22h2.34v-1.5h-2.34V22zM14.433 20.5V22h1.92v-1.5h-1.92z" />
    </Svg>
  );
};
const CopyAllIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CopyAllIconOutline;
