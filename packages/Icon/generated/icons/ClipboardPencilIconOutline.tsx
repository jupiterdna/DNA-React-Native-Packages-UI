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
      <Path d="M15.867 7.318a1.089 1.089 0 00-1.55 0l-.712.718 2.308 2.332.711-.718a1.117 1.117 0 000-1.568l-.757-.764zM12.888 8.768l2.304 2.328-6.043 6.107H6.846v-2.329l6.042-6.106z" />
      <Path d="M14.841 3.123h3.909c1.243 0 2.25 1.018 2.25 2.274v13.327c0 1.256-1.007 2.274-2.25 2.274H5.25C4.007 20.998 3 19.98 3 18.724V5.397c0-1.256 1.007-2.274 2.25-2.274h3.91C9.383 1.723 10.622.734 12 .734c1.38 0 2.62.99 2.841 2.389zM4.5 5.397v13.327c0 .419.336.758.75.758h13.5c.414 0 .75-.34.75-.758V5.397a.754.754 0 00-.75-.758H5.25c-.414 0-.75.34-.75.758zM12 2.206c-.45 0-.75.379-.75.757 0 .379.3.758.75.758s.75-.38.75-.758-.3-.757-.75-.757z" />
    </Svg>
  );
};
const ClipboardPencilIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ClipboardPencilIconOutline;
