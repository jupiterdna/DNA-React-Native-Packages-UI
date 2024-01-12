//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const SettingsSquareIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12 9.934a2.066 2.066 0 100 4.132 2.066 2.066 0 000-4.132z" />
      <Path d="M3.125 5.375a2.25 2.25 0 012.25-2.25h13.25a2.25 2.25 0 012.25 2.25v13.25a2.25 2.25 0 01-2.25 2.25H5.375a2.25 2.25 0 01-2.25-2.25V5.375zm10.22 1.413h-2.69L10.43 8.43a3.86 3.86 0 00-.738.426L8.16 8.229l-1.346 2.33 1.311 1.015a3.832 3.832 0 00-.015.688l.015.164-1.31 1.014 1.345 2.332 1.534-.628c.229.168.476.31.738.426l.223 1.642h2.692l.223-1.642c.262-.116.51-.259.737-.426l1.535.627 1.345-2.33-1.311-1.016a3.833 3.833 0 000-.85l1.311-1.015-1.345-2.331-1.534.627a3.917 3.917 0 00-.738-.426l-.223-1.642z" />
    </Svg>
  );
};
export default SettingsSquareIcon;
