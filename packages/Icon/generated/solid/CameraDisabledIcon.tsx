//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CameraDisabledIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M21.378 23.178l-2.085-2.085H4.271a2.25 2.25 0 01-2.25-2.25V7.524c0-1.002.656-1.851 1.56-2.142L1.162 2.96l1.06-1.06L22.44 22.116l-1.061 1.061zm-6.705-6.705l-1.066-1.066a2.625 2.625 0 01-3.682-3.682L8.86 10.66a4.125 4.125 0 005.814 5.814zM14.702 3.03H9.3L7.857 4.623l-.003-.002 4.577 4.603a4.126 4.126 0 013.68 3.7l5.87 5.906V7.524a2.25 2.25 0 00-2.25-2.25h-2.992L14.702 3.03z" />
    </Svg>
  );
};
export default CameraDisabledIcon;
