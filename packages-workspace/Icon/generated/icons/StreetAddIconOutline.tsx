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
      <Path d="M3.672 20.103v-16.4h1.5v16.4h-1.5zM10.92 7.886V3.703h1.5v4.183h-1.5zm7.249 5.046v-9.23h1.5v9.23h-1.5zm-7.25 1.062V9.811h1.5v4.183h-1.5zm8.75.925v3.376h3.376v1.5H19.67v3.376h-1.5v-3.376h-3.376v-1.5h3.376V14.92h1.5zm-8.75 5.184V15.92h1.5v4.183h-1.5z" />
    </Svg>
  );
};
const StreetAddIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StreetAddIconOutline;
