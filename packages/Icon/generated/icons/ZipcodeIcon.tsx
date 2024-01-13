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
      <Path d="M15.084 14.563v-1.201h.496a.6.6 0 010 1.201h-.496z" />
      <Path d="M12 2.6l10.775 8.037-.897 1.202-1.78-1.327v10.286H3.903V10.512l-1.78 1.327-.896-1.202L12 2.6zm-.618 9.393v4.998h1.25v-4.998h-1.25zm4.198 3.82a1.85 1.85 0 000-3.701h-1.12a.625.625 0 00-.626.625v4.248h1.25v-1.172h.496zm-8.384-2.447h1.39l-1.193 2.611a.625.625 0 00.569.885h2.355v-1.25H8.934l1.193-2.611a.625.625 0 00-.569-.885H7.196v1.25z" />
    </Svg>
  );
};
const ZipcodeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ZipcodeIcon;
