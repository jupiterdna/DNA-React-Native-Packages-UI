//this is auto-generated files please do not edit!
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const wrapper = (props: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M7.54 4.448h8.92v3.85H7.54v-3.85zm-1.5 3.85H4.715a2.75 2.75 0 00-2.75 2.75v6.212H6.09v3.792h11.82V17.26h4.124v-6.212a2.75 2.75 0 00-2.75-2.75h-1.323v-5.35H6.039v5.35zm11.87 7.462v-1.464H6.09v1.464H3.466v-4.712c0-.69.56-1.25 1.25-1.25h14.568c.367 0 .697.158.925.409.202.222.325.517.325.84v4.713H17.91zm-1.5 3.792H7.59v-3.756h8.82v3.756zm.895-6.453a1.265 1.265 0 100-2.53 1.265 1.265 0 000 2.53z" />
    </Svg>
  );
};
const PrinterIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PrinterIconOutline;
