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
      <Path d="M6.777 2.004a2.726 2.726 0 01.706 5.36v4.168H14.6a2.727 2.727 0 015.347.75 2.726 2.726 0 01-5.347.75H7.483v4.738c0 .414.336.75.75.75H14.6a2.727 2.727 0 110 1.5H8.232a2.25 2.25 0 01-2.25-2.25V7.338a2.727 2.727 0 01.794-5.334zM8.003 4.73a1.226 1.226 0 10-2.452 0 1.226 1.226 0 002.452 0zm10.445 7.552a1.226 1.226 0 10-2.452 0 1.226 1.226 0 002.452 0zm-1.226 5.762a1.226 1.226 0 100 2.452 1.226 1.226 0 000-2.452z" />
    </Svg>
  );
};
const WorkflowIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default WorkflowIconOutline;
