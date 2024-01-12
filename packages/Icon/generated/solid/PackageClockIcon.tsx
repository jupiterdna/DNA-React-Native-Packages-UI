//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PackageClockIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M10.34 2.096a.75.75 0 00-.735 0L1.382 6.721A.75.75 0 001 7.375v9.25c0 .271.146.52.382.654l7.84 4.41V10.718L3.28 7.375l2.63-1.48 6.693 3.765-1.88 1.057v10.971l2.386-1.342a6 6 0 015.835-9.056V7.375a.75.75 0 00-.382-.654L10.34 2.096zM14.133 8.8L7.44 5.035 9.972 3.61l6.693 3.764-2.532 1.424z" />
      <Path d="M13.5 17.25a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zm4.014-2.072v2.389l1.87 1.87 1.06-1.061-1.43-1.43v-1.768h-1.5z" />
    </Svg>
  );
};
export default PackageClockIcon;
