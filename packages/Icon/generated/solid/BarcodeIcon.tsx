//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const BarcodeIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M1.85 18.65V5.725H3.7V18.65H1.85zm2.775 0V5.725H6.45V18.65H4.625zm2.75 0V5.725H8.3V18.65h-.925zm2.775 0V5.725H12V18.65h-1.85zm2.775 0V5.725H15.7V18.65h-2.775zm3.7 0V5.725h.925V18.65h-.925zm2.75 0V5.725h2.775V18.65h-2.775z" />
    </Svg>
  );
};
export default BarcodeIcon;
