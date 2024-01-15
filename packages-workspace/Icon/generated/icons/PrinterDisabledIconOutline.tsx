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
      <Path d="M17.93 19.148l2.754 2.753 1.06-1.061-3.813-3.794L6.06 5.176 3.004 2.1l-1.06 1.06L6.06 7.277v.494H4.737a2.75 2.75 0 00-2.75 2.75v6.212h4.124v3.792h11.82v-1.377zm-1.5-1.5v1.377H7.612V15.27h6.44l2.38 2.379zm-3.878-3.88h-6.44v1.465H3.486v-4.712c0-.69.56-1.25 1.25-1.25h3.317l4.498 4.498zM22.056 16.733h-1.61l-1.5-1.5h1.61v-4.712c0-.324-.123-.619-.326-.84a1.245 1.245 0 00-.924-.41h-6.323l-1.5-1.5h5V3.92h-8.85l-1.5-1.5h11.85v5.35h1.323a2.75 2.75 0 012.75 2.75v6.212z" />
      <Path d="M17.326 12.572a1.266 1.266 0 100-2.53 1.266 1.266 0 000 2.53z" />
    </Svg>
  );
};
const PrinterDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PrinterDisabledIconOutline;
