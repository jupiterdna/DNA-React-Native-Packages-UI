//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const SaveCloseIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M4.95 3A1.95 1.95 0 003 4.95v14.1A1.95 1.95 0 004.95 21h14.1A1.95 1.95 0 0021 19.05V7.006L16.954 3H4.95zm10.426 1.5v5.25H5.893V4.5h9.483zm-6.532 8.41l1.06-1.06L12 13.943l2.095-2.095 1.06 1.061-2.094 2.095 2.094 2.094-1.06 1.061-2.095-2.095-2.095 2.095-1.06-1.06 2.094-2.095-2.094-2.095z" />
    </Svg>
  );
};
export default SaveCloseIcon;
