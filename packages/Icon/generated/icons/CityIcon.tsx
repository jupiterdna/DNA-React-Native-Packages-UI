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
      <Path d="M3.503 22V7.436h5.439v-2.45L12.022 2l3.036 2.985v6.675h5.44V22H3.502zm1.892-1.892h2.332v-2.332H5.395v2.332zm0-4.224h2.332v-2.332H5.395v2.332zm0-4.224h2.332V9.328H5.395v2.332zm5.439 8.448h2.332v-2.332h-2.332v2.332zm0-4.224h2.332v-2.332h-2.332v2.332zm0-4.224h2.332V9.328h-2.332v2.332zm0-4.224h2.332V5.104h-2.332v2.332zm5.44 12.672h2.331v-2.332h-2.332v2.332zm0-4.224h2.331v-2.332h-2.332v2.332z" />
    </Svg>
  );
};
const CityIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CityIcon;
