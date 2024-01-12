//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PolicyIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M11.223 11.192v1.43h-1.43v1.5h1.43v1.43h1.5v-1.43h1.43v-1.5h-1.43v-1.43h-1.5z" />
      <Path d="M4 4.25A2.25 2.25 0 016.25 2h7.66L20 8.098V19.75A2.25 2.25 0 0117.75 22H6.25A2.25 2.25 0 014 19.75V4.25zm8 3.876l-.425.393c-.97.898-2.217 1.157-3.837 1.187l-.613.011v.614c0 2.631.603 4.426 1.507 5.748.892 1.305 2.044 2.095 3.007 2.756l.36.247.362-.247c.963-.66 2.115-1.451 3.007-2.756.904-1.322 1.507-3.117 1.507-5.748v-.614l-.613-.011c-1.62-.03-2.867-.29-3.837-1.187L12 8.126z" />
    </Svg>
  );
};
export default PolicyIcon;
