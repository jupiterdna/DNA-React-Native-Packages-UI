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
      <Path d="M2.135 2.135v19.73h19.73V2.135H2.135zm16.691 16.691h-5.52v-1.512h2.948L12 13.061l-4.253 4.231h2.948v1.534H5.174v-5.499h1.512v2.926L10.94 12 6.686 7.746v2.948H5.174v-5.52h5.52v1.512H7.748L12 10.939l4.254-4.232h-2.948V5.175h5.52v5.52h-1.512V7.746L13.061 12l4.232 4.253v-2.948h1.533v5.521z" />
    </Svg>
  );
};
const MovementNameIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MovementNameIcon;
