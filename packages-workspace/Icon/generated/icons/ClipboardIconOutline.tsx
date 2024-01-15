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
      <Path d="M7 8.665h10v-1.5H7v1.5zM17 12.77H7v-1.5h10v1.5zM7 16.876h7v-1.5H7v1.5z" />
      <Path d="M18.75 3.119h-3.909c-.222-1.4-1.46-2.389-2.84-2.389s-2.618.989-2.84 2.389H5.25C4.007 3.119 3 4.137 3 5.393V18.72c0 1.256 1.007 2.274 2.25 2.274h13.5c1.243 0 2.25-1.018 2.25-2.274V5.393c0-1.256-1.007-2.274-2.25-2.274zM5.25 4.635h13.5c.414 0 .75.339.75.758V18.72a.754.754 0 01-.75.758H5.25a.754.754 0 01-.75-.758V5.393c0-.419.336-.758.75-.758zm6-1.676c0-.379.3-.758.75-.758s.75.38.75.758c0 .379-.3.758-.75.758s-.75-.38-.75-.758z" />
    </Svg>
  );
};
const ClipboardIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ClipboardIconOutline;
