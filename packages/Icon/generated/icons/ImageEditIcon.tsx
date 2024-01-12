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
      <Path d="M20.839 12.108a1.07 1.07 0 011.51 0l.738.736a1.066 1.066 0 010 1.509l-.575.573-2.247-2.244.574-.574zm-1.075 1.082l2.252 2.249-5.365 5.357h-2.252v-2.248l5.365-5.357z" />
      <Path d="M5.425 3.175a2.25 2.25 0 00-2.25 2.25v13.15a2.25 2.25 0 002.25 2.25h7.474v-2.9l.754-.754H6.248l2.903-3.829 2.048 2.64 2.86-3.777 1.945 2.615 3.774-3.773a2.56 2.56 0 011.047-.634V5.425a2.25 2.25 0 00-2.25-2.25H5.425z" />
    </Svg>
  );
};
const ImageEditIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageEditIcon;
