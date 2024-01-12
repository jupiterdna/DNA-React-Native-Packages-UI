//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const FileAddIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M4 4.25A2.25 2.25 0 016.25 2h7.66L20 8.098V19.75A2.25 2.25 0 0117.75 22H6.25A2.25 2.25 0 014 19.75V4.25zm9.611-.427v4.562h4.555l-4.555-4.562zm-2.364 14.633h1.5v-3.25h3.25v-1.5h-3.25v-3.25h-1.5v3.25h-3.25v1.5h3.25v3.25z" />
    </Svg>
  );
};
export default FileAddIcon;
