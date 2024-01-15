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
      <Path d="M10.488 8.56V5.932a1.148 1.148 0 00.356-1.186 1.151 1.151 0 10-1.856 1.189V8.56h-5.27v4.011a2.65 2.65 0 110 3.507v4.012h8.326a6.056 6.056 0 001.234 1.5H3.218a1 1 0 01-1-1v-5.515h2.615a1.148 1.148 0 001.023.391 1.152 1.152 0 10-1.022-1.891H2.219V8.06a1 1 0 011-1h4.77v-.007a2.65 2.65 0 113.5-.003v.01h4.767a1 1 0 011 1v2.977c-.518 0-1.02.066-1.5.189V8.56h-5.268z" />
      <Path d="M16.507 17.814v1.426h1.5v-1.426h1.426v-1.5h-1.426v-1.427h-1.5v1.427H15.08v1.5h1.427z" />
      <Path d="M17.257 21.59a4.526 4.526 0 100-9.053 4.526 4.526 0 000 9.053zm0-1.5a3.026 3.026 0 110-6.053 3.026 3.026 0 010 6.053z" />
    </Svg>
  );
};
const AddonIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AddonIconOutline;
