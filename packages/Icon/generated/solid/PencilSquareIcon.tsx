//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PencilSquareIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M21.495 2.782c-.706-.706-1.907-.859-2.675-.09l-1.731 1.73 4.014 4.014 1.73-1.73c.77-.769.617-1.97-.09-2.676l-1.248-1.248zM19.856 9.712l-4.02-4.02-6.666 6.665v4.02h4.02l6.666-6.665z" />
      <Path d="M7.17 11.528l7.024-7.025H5.75A2.75 2.75 0 003 7.253v12.5a2.75 2.75 0 002.75 2.75h12.5a2.75 2.75 0 002.75-2.75v-8.356l-6.981 6.98h-6.85V11.53z" />
    </Svg>
  );
};
export default PencilSquareIcon;
