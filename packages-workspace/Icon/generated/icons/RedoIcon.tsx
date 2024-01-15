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
      <Path d="M15.049 4.8l4.65 4.65-4.65 4.651-1.06-1.06 2.839-2.84H9.549a3.75 3.75 0 000 7.5h7.252v1.5H9.549a5.25 5.25 0 010-10.5h7.279l-2.84-2.84 1.06-1.06z" />
    </Svg>
  );
};
const RedoIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default RedoIcon;
