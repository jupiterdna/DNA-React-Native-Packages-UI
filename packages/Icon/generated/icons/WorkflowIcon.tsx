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
      <Path d="M9.503 4.73a2.726 2.726 0 10-3.52 2.608V17.77a2.25 2.25 0 002.25 2.25H14.6a2.727 2.727 0 100-1.5H8.234a.75.75 0 01-.75-.75v-4.737H14.6a2.727 2.727 0 100-1.5H7.482V7.363a2.727 2.727 0 002.02-2.633z" />
    </Svg>
  );
};
const WorkflowIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default WorkflowIcon;
