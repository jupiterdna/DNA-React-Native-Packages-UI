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
      <Path d="M11.095 6.712c0-2.238 1.947-4.052 4.206-4.052 2.258 0 4.088 1.814 4.088 4.052 0 .866-.273 1.667-.74 2.326l3.23 3.177-1.053 1.097-3.273-3.218a4.28 4.28 0 01-2.302.693c-2.367 0-4.156-1.837-4.156-4.075zM15.3 4.22c-1.414 0-2.654 1.091-2.654 2.492s1.137 2.562 2.654 2.562a2.57 2.57 0 002.56-2.562c-.083-1.376-1.147-2.492-2.56-2.492zM13.257 12.597l3.7 4.932H5.47l2.89-3.797 2.047 2.615 2.851-3.75z" />
      <Path d="M10.268 3.39H4.37a2.25 2.25 0 00-2.25 2.25v13.45a2.25 2.25 0 002.25 2.25H17.82a2.25 2.25 0 002.25-2.25v-4.082l-1.5-1.582v5.663a.75.75 0 01-.75.75H4.37a.75.75 0 01-.75-.75V5.64a.75.75 0 01.75-.75h5.898v-1.5z" />
    </Svg>
  );
};
const ImageSearchIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageSearchIconOutline;
