//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const LocationAddIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M20.12 3.756V.38h-1.5v3.376h-3.375v1.5h3.376V8.63h1.5V5.256h3.375v-1.5h-3.375z" />
      <Path d="M13.745 6.756V2.104a8.326 8.326 0 00-1.6-.18l-.005-.003h-.133c-4.495 0-8.167 3.571-8.167 8.01 0 2.808 1.69 5.486 3.408 7.539 1.306 1.561 2.742 2.886 3.598 3.676.27.249.482.445.615.578l.532.536.532-.536c.133-.134.347-.33.619-.582.858-.79 2.294-2.113 3.6-3.672 1.68-2.004 3.335-4.604 3.412-7.34l-3.035.001V6.756h-3.376zM12 8.01a2.076 2.076 0 110 4.152 2.076 2.076 0 010-4.152z" />
    </Svg>
  );
};
export default LocationAddIcon;
