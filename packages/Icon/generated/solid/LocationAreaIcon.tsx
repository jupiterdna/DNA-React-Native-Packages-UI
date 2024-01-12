//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const LocationAreaIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M3.156 7.355c0-2.974 2.458-5.356 5.457-5.356h.131L8.751 2c2.938.07 5.308 2.428 5.308 5.354 0 1.883-1.132 3.647-2.231 4.96-.843 1.005-1.786 1.874-2.326 2.37-.164.152-.291.27-.367.345l-.532.536-.532-.536a14.025 14.025 0 00-.364-.342c-.54-.497-1.482-1.367-2.325-2.375-1.097-1.312-2.226-3.075-2.226-4.958zm3.86.058a1.591 1.591 0 103.182 0 1.591 1.591 0 00-3.182 0z" />
      <Path d="M4.721 13.838L2 22.002h20l-3-9h-5.796c-.076.095-.152.186-.226.275-.37.44-.754.855-1.117 1.225h4.295l-11.93 5.567 1.673-5.021c-.36-.347-.768-.758-1.178-1.21zm9.553 3.197l3.885-1.813 1.431 4.294-5.316-2.481zm-1.774.828l5.655 2.639H6.845l5.655-2.64z" />
    </Svg>
  );
};
export default LocationAreaIcon;
