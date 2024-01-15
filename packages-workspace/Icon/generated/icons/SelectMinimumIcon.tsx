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
      <Path d="M2.625 4.875a2.25 2.25 0 012.25-2.25h14.25a2.25 2.25 0 012.25 2.25v14.25a2.25 2.25 0 01-2.25 2.25h-4.582V9.46H2.625V4.875z" />
      <Path d="M2.625 10.955h2.144v1.5h-.644v.644h-1.5v-2.144zM6.441 10.955H9.23v1.5H6.44v-1.5zM10.901 10.955h2.144V13.1h-1.5v-.644H10.9v-1.5zM2.625 17.559V14.77h1.5v2.788h-1.5zM13.045 14.771v2.788h-1.5V14.77h1.5zM2.625 19.231h1.5v.644h.644v1.5H2.625v-2.144zM13.045 19.231v2.144H10.9v-1.5h.644v-.644h1.5zM9.229 21.375H6.44v-1.5H9.23v1.5z" />
    </Svg>
  );
};
const SelectMinimumIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SelectMinimumIcon;
