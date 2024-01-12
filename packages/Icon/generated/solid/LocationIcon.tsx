//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const LocationIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12.008 1.83c-4.496 0-8.168 3.571-8.168 8.01 0 2.807 1.69 5.485 3.408 7.539 1.306 1.561 2.742 2.886 3.598 3.676.27.249.482.445.615.578l.532.536.532-.536c.133-.134.347-.331.619-.582.858-.79 2.294-2.114 3.6-3.672 1.72-2.053 3.415-4.731 3.415-7.54 0-4.391-3.577-7.936-8.013-8.007l-.007-.002h-.131zM12 7.855a2.076 2.076 0 110 4.153 2.076 2.076 0 010-4.153z" />
    </Svg>
  );
};
export default LocationIcon;
