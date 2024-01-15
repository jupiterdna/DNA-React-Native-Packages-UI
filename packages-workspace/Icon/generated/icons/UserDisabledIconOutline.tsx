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
      <Path d="M19.166 20.832l1.42 1.421 1.061-1.06L2.803 2.347l-1.06 1.06L11.8 13.467c-2.023.025-3.923.428-5.354 1.046-.737.318-1.384.708-1.858 1.161-.468.448-.839 1.029-.839 1.712v3.447h15.417zm-1.5-1.5H5.248v-1.947c0-.115.065-.33.376-.627.304-.291.78-.594 1.416-.869 1.268-.547 3.04-.924 4.959-.924.464 0 .92.022 1.363.063l4.304 4.304zM19.41 15.673c.358.342.659.762.78 1.246l-2.206-2.207c.557.277 1.047.599 1.426.961zM16.072 7.336c0 1.482-.79 2.779-1.972 3.492l-1.113-1.113A2.576 2.576 0 109.62 6.349L8.507 5.236a4.074 4.074 0 017.565 2.1z" />
    </Svg>
  );
};
const UserDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserDisabledIconOutline;
