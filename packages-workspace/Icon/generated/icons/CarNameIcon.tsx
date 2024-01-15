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
      <Path d="M9.047 7.443h5.906l-.473-1.307H9.52l-.473 1.307zM14.06 10.418a.665.665 0 100-1.33.665.665 0 000 1.33zM10.605 9.753a.665.665 0 11-1.33 0 .665.665 0 011.33 0z" />
      <Path d="M6.25 2A2.25 2.25 0 004 4.25v15.5A2.25 2.25 0 006.25 22h11.5A2.25 2.25 0 0020 19.75V4.25A2.25 2.25 0 0017.75 2H6.25zm8.73 10.369v-.282H9.02v.282c0 .4-.325.725-.725.725H8.1a.725.725 0 01-.725-.725l.001-3.984.999-2.757a1.125 1.125 0 011.058-.742h5.134c.474 0 .897.296 1.058.742l.999 2.757.001 3.984c0 .4-.325.725-.725.725h-.195a.725.725 0 01-.725-.725zm1.77 3.93h-9.5v-1.5h9.5v1.5zm-9.5 2.997v-1.5h9.5v1.5h-9.5z" />
    </Svg>
  );
};
const CarNameIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarNameIcon;
