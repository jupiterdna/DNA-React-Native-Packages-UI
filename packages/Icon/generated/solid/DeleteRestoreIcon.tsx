//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const DeleteRestoreIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M8.013 4.393V4.17a2.25 2.25 0 012.25-2.25h3.473a2.25 2.25 0 012.25 2.25v.223h4.264v1.5h-.968v13.154a2.25 2.25 0 01-2.25 2.25H6.978a2.25 2.25 0 01-2.25-2.25V5.893H3.75v-1.5h4.263zm1.5-.223v.223h4.973V4.17a.75.75 0 00-.75-.75h-3.473a.75.75 0 00-.75.75zm3.242 6.95l1.941 1.956 1.065-1.056-3.756-3.786-3.756 3.786 1.064 1.056 1.942-1.956v4.754h1.5V11.12z" />
    </Svg>
  );
};
export default DeleteRestoreIcon;
