//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const TextFieldIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M17.307 3.457h2.177v-1.5h-5.85v1.5h2.173v17.086h-2.172v1.5h5.85v-1.5h-2.178V3.457zm1.5 2.02v-1.5h4.05v16.047h-4.05v-1.5h2.55V5.477h-2.55zm-4.5 14.547v-1.5H2.645V5.477h11.662v-1.5H1.145v16.047h13.162zM9.369 9.079H12.5v-1.5H4.736v1.5H7.87v7.118h1.5V9.08z" />
    </Svg>
  );
};
export default TextFieldIcon;
