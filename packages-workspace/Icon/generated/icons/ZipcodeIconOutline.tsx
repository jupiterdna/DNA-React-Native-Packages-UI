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
      <Path d="M11.382 12.003V17h1.25v-4.998h-1.25zM15.58 15.823h-.496v1.172h-1.25v-4.248c0-.345.28-.625.625-.625h1.12a1.85 1.85 0 010 3.701zm-.496-1.25h.496a.6.6 0 000-1.201h-.496v1.201zM7.196 13.376h1.39l-1.193 2.612a.625.625 0 00.569.884h2.355v-1.25H8.934l1.193-2.611a.625.625 0 00-.569-.885H7.196v1.25z" />
      <Path d="M22.775 10.647L12 2.61 1.226 10.647l.896 1.202 1.78-1.327v10.286h16.197V10.522l1.779 1.327.897-1.202zM5.402 19.308V9.403L12 4.481 18.6 9.403v9.905H5.402z" />
    </Svg>
  );
};
const ZipcodeIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ZipcodeIconOutline;
