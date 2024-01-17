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
      <Path d="M14.78 14.088l-4.704-3.528v7.057l4.705-3.529z" />
      <Path d="M5.949 6.961L4.055 3.158a2.25 2.25 0 00-2.043 2.24v13.175a2.25 2.25 0 002.25 2.25h15.476a2.25 2.25 0 002.25-2.25V5.398a2.25 2.25 0 00-2.25-2.25H17.05l1.899 3.813H16.15l-1.899-3.813h-2.3l1.898 3.813H11.05L9.152 3.148H6.849l1.899 3.813h-2.8zM3.512 18.573v-9.72h16.976v9.72a.75.75 0 01-.75.75H4.262a.75.75 0 01-.75-.75z" />
    </Svg>
  );
};
const MoviePlayIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MoviePlayIconOutline;
