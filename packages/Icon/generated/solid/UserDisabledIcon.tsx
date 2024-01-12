//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const UserDisabledIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M19.165 20.832l1.42 1.421 1.061-1.06L2.802 2.347l-1.06 1.06 10.056 10.058c-2.022.025-3.921.428-5.353 1.046-.737.318-1.384.708-1.858 1.161-.468.448-.839 1.029-.839 1.712v3.447h15.417zM19.409 15.673c.358.342.659.762.78 1.246l-2.206-2.207c.558.277 1.047.599 1.426.961zM16.071 7.336c0 1.482-.79 2.779-1.972 3.492L8.507 5.236a4.074 4.074 0 017.565 2.1z" />
    </Svg>
  );
};
export default UserDisabledIcon;
