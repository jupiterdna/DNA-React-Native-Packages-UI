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
      <Path d="M17.479 16.511c2.485 0 4.5-2.02 4.5-4.51a4.506 4.506 0 00-4.5-4.512c-2.486 0-4.5 2.02-4.5 4.511a4.5 4.5 0 001.142 3.004H9.882a4.5 4.5 0 10-3.106 1.5h10.448c.084.005.17.007.255.007zm-7.958-4.5a3 3 0 11-6 0 3 3 0 016 0zm10.957-.01a3.006 3.006 0 01-3 3.01c-1.653 0-3-1.344-3-3.01a3.006 3.006 0 013-3.012c1.654 0 3 1.344 3 3.011z" />
    </Svg>
  );
};
const VoicemailIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default VoicemailIcon;
