//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const FileDescriptionIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M19 9.193V4.25A2.25 2.25 0 0016.75 2H5.25A2.25 2.25 0 003 4.25v15.5A2.25 2.25 0 005.25 22h4.692v-3.75l2.751-2.75H6.75V14h7.443L19 9.193zM6.75 11.5V10h8.5v1.5h-8.5zm8.5-4h-8.5V6h8.5v1.5zM17.808 13.237a.75.75 0 011.06 0l1.912 1.912a.75.75 0 010 1.06l-1.234 1.235-2.97-2.974 1.232-1.233z" />
      <Path d="M15.514 15.53l2.971 2.975L14.99 22h-3.025v-2.92l3.55-3.55z" />
    </Svg>
  );
};
export default FileDescriptionIcon;
