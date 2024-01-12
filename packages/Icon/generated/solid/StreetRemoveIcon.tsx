//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const StreetRemoveIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M19.668 3.7h-7.25v4.183h-1.5V3.7H3.67v16.4h7.248v-4.183h1.5V20.1h2.008l1.665-1.665-2.388-2.387 2.828-2.828 2.388 2.387.749-.75V3.7zm-8.75 10.292V9.808h1.5v4.184h-1.5z" />
      <Path d="M22.367 16.048l-2.388 2.388 2.388 2.387-1.061 1.06-2.387-2.387-2.387 2.388-1.061-1.061 2.387-2.387-2.387-2.388 1.06-1.06 2.388 2.387 2.387-2.387 1.06 1.06z" />
    </Svg>
  );
};
export default StreetRemoveIcon;
