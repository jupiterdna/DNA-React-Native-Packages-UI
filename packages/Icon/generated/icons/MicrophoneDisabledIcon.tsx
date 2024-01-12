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
      <Path d="M15.702 17.213l4.586 4.586 1.061-1.06L2.811 2.2 1.75 3.26l7.19 7.19v.769a2.738 2.738 0 003.42 2.652l2.255 2.255A5.75 5.75 0 015.94 11.5H4.437a7.251 7.251 0 006.49 6.895v3.197h1.5v-3.197a7.201 7.201 0 003.275-1.182zM14.415 10.979V5.2a2.738 2.738 0 10-5.476 0v.303l5.476 5.476zM18.918 11.5a7.211 7.211 0 01-.86 3.123l-1.12-1.121c.273-.618.44-1.293.478-2.002h1.502z" />
    </Svg>
  );
};
const MicrophoneDisabledIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MicrophoneDisabledIcon;
