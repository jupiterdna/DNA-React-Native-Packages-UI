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
      <Path d="M15.154 2.976v5.687h1.5V6.569h4.34v-1.5h-4.34V2.976h-1.5zM12.549 6.57h-9.47v-1.5h9.47v1.5zM7.336 12.75H3.078v-1.5h4.258V9.156h1.5v5.688h-1.5V12.75zM3.078 18.925h5.758v-1.5H3.078v1.5zM20.994 12.75h-9.588v-1.5h9.588v1.5zM20.994 18.925H12.98v2.094h-1.5v-5.687h1.5v2.093h8.015v1.5z" />
    </Svg>
  );
};
const PreferencesIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PreferencesIcon;
