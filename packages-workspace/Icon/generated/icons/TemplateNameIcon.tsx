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
      <Path d="M3.25 5.5A2.25 2.25 0 015.5 3.25h13a2.25 2.25 0 012.25 2.25v13a2.25 2.25 0 01-2.25 2.25h-13a2.25 2.25 0 01-2.25-2.25v-13zM17 8.076v-1.5H7v1.5h10zM7 11.174h10v-1.5H7v1.5zm0 1.25v5h4v-5H7zm10 0h-4v5h4v-5z" />
    </Svg>
  );
};
const TemplateNameIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TemplateNameIcon;
