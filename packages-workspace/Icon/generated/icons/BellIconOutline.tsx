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
      <Path d="M11.991 1.879c-.882 0-1.597.715-1.597 1.598v.679a6.182 6.182 0 00-4.58 5.97v7.287H3.8v1.5h16.4v-1.5h-2.025v-7.287a6.183 6.183 0 00-4.586-5.972v-.677c0-.883-.715-1.598-1.598-1.598zm4.684 15.534h-9.36v-7.287a4.68 4.68 0 019.36 0v7.287zM14.124 20.347a2.127 2.127 0 01-4.253 0h4.253z" />
    </Svg>
  );
};
const BellIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BellIconOutline;
