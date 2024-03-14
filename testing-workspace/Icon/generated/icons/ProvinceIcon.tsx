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
      <Path d="M12.002 3L2.266 8.515v1.723h1.74v8.532h-1.74V21h19.467v-2.23h-1.78V10.24h1.78V8.514L12.003 3zm5.721 15.77h-4.628V10.24h4.628v8.531zm-6.858 0H6.236V10.24h4.63v8.531zm2.392-11.963a1.254 1.254 0 11-2.509 0 1.254 1.254 0 012.509 0z" />
    </Svg>
  );
};
const ProvinceIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ProvinceIcon;
