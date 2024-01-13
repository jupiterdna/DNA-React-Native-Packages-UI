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
      <Path d="M9.688 7.604c.078 1.316.42 2.182.845 2.804.41.6.92 1.011 1.468 1.4V6.865c-.702.482-1.497.671-2.313.738z" />
      <Path d="M4.588 5a2.25 2.25 0 012.25-2.25h10.324A2.25 2.25 0 0119.412 5v14a2.25 2.25 0 01-2.25 2.25H6.838A2.25 2.25 0 014.588 19V5zm11.317 10.874v-1.25H8.094v1.25h7.81zm-7.811 2.683h7.81v-1.25h-7.81v1.25zm4.331-12.948L12 5.216l-.424.393c-.623.576-1.43.755-2.543.775l-.613.011v.614c0 1.86.427 3.148 1.081 4.105.64.936 1.467 1.503 2.133 1.96l.366.252.366-.251c.667-.458 1.493-1.025 2.134-1.961.654-.957 1.081-2.244 1.081-4.105v-.614l-.614-.01c-1.112-.021-1.92-.2-2.542-.776z" />
    </Svg>
  );
};
const PolicyNameIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PolicyNameIcon;
