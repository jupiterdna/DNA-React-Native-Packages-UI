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
      <Path d="M4.95 3A1.95 1.95 0 003 4.95v14.1A1.95 1.95 0 004.95 21h14.1A1.95 1.95 0 0021 19.05V7.006L16.954 3H4.95zm10.426 1.5v5.25H5.893V4.5h9.483zM12 17.407a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z" />
    </Svg>
  );
};
const SaveIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SaveIcon;
