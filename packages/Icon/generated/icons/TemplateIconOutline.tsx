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
      <Path d="M7 11.349h10v-1.5H7v1.5zM7 12.599h4v5H7v-5zM17 12.599h-4v5h4v-5z" />
      <Path d="M3.25 5.5A2.25 2.25 0 015.5 3.25h13a2.25 2.25 0 012.25 2.25v13a2.25 2.25 0 01-2.25 2.25h-13a2.25 2.25 0 01-2.25-2.25v-13zm2.25-.75a.75.75 0 00-.75.75v1.25h14.5V5.5a.78.78 0 00-.078-.334.745.745 0 00-.672-.416h-13zM4.75 18.5c0 .414.336.75.75.75h13a.75.75 0 00.75-.75V8.25H4.75V18.5z" />
    </Svg>
  );
};
const TemplateIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TemplateIconOutline;
