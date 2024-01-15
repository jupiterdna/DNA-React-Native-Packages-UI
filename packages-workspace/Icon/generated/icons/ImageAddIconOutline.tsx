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
      <Path d="M5.275 3.025h7.822v1.5H5.275a.75.75 0 00-.75.75v13.45c0 .413.336.75.75.75h13.45a.75.75 0 00.75-.75V10.97h1.5v7.753a2.25 2.25 0 01-2.25 2.25H5.274a2.25 2.25 0 01-2.25-2.25V5.275a2.25 2.25 0 012.25-2.25z" />
      <Path d="M16.975 9.503v-2.37h-2.37v-1.5h2.37v-2.37h1.5v2.37h2.37v1.5h-2.37v2.37h-1.5zM17.883 17.176l-3.735-5.045-2.893 3.838-2.07-2.682-2.937 3.889h11.635z" />
    </Svg>
  );
};
const ImageAddIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageAddIconOutline;
