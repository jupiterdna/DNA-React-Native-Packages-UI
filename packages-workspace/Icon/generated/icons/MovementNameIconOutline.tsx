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
      <Path d="M13.306 18.826h5.52v-5.52h-1.534v2.947L13.062 12l4.253-4.254v2.948h1.512v-5.52h-5.52v1.533h2.948L12 10.94 7.747 6.686h2.948V5.174H5.174v5.52h1.512V7.746L10.94 12l-4.254 4.253v-2.926H5.174v5.5h5.52v-1.535H7.748L12 13.061l4.254 4.253h-2.948v1.512z" />
      <Path d="M2.135 21.865V2.135h19.73v19.73H2.135zm1.5-18.23v16.73h16.73V3.635H3.635z" />
    </Svg>
  );
};
const MovementNameIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MovementNameIconOutline;
