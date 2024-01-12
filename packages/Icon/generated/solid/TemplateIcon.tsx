//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const TemplateIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M17 11.349H7v-1.5h10v1.5zM11 12.599H7v5h4v-5zM17 12.599h-4v5h4v-5z" />
      <Path d="M3.268 5.215l-.012.135-.006.15v13a2.25 2.25 0 002.25 2.25h13a2.25 2.25 0 002.25-2.25v-13a2.247 2.247 0 00-2.25-2.25h-13a2.25 2.25 0 00-2.232 1.965zM4.75 8.25h14.5V18.5a.748.748 0 01-.75.75h-13a.75.75 0 01-.75-.75V8.25z" />
    </Svg>
  );
};
export default TemplateIcon;
