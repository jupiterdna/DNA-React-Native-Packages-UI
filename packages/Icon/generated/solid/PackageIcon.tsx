//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PackageIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12.367 2.096a.75.75 0 00-.735 0L3.41 6.721a.75.75 0 00-.383.654v9.25c0 .271.146.52.383.654l7.84 4.41V10.718L5.307 7.375l2.63-1.48L14.63 9.66l-1.88 1.057v10.971l7.84-4.41a.75.75 0 00.382-.653v-9.25a.75.75 0 00-.383-.654l-8.222-4.625zM16.16 8.8L9.468 5.035 12 3.61l6.692 3.764-2.532 1.424z" />
    </Svg>
  );
};
export default PackageIcon;
