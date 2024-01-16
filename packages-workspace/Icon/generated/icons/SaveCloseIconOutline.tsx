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
      <Path d="M8.844 12.91l2.094 2.095-2.094 2.094 1.06 1.061L12 16.065l2.095 2.095 1.06-1.06-2.094-2.095 2.094-2.095-1.06-1.06-2.095 2.094-2.095-2.095-1.06 1.061z" />
      <Path d="M4.95 3A1.95 1.95 0 003 4.95v14.1A1.95 1.95 0 004.95 21h14.1A1.95 1.95 0 0021 19.05V7.006L16.954 3H4.95zM4.5 4.95a.45.45 0 01.45-.45h.942v5.25h9.483V4.5h.962L19.5 7.632V19.05a.45.45 0 01-.45.45H4.95a.45.45 0 01-.45-.45V4.95zm2.892 3.3V4.5h6.483v3.75H7.392z" />
    </Svg>
  );
};
const SaveCloseIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SaveCloseIconOutline;
