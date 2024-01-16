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
      <Path d="M8.559 5.297C8.559 3.437 10.14 2 12.004 2h.127l.009.003c1.804.067 3.303 1.481 3.303 3.294 0 1.176-.724 2.233-1.361 2.968-.501.578-1.083 1.094-1.384 1.361a7.11 7.11 0 00-.177.16l-.523.51-.523-.51-.176-.16c-.301-.267-.881-.783-1.383-1.362C9.28 7.53 8.56 6.472 8.56 5.297zm4.318.032c0-.468-.393-.848-.878-.848s-.878.38-.878.848c0 .469.393.848.878.848s.878-.38.878-.848zM20.226 11.251v1.5h-.976v6.268H4.75V12.75h-.977v-1.5h16.453z" />
      <Path d="M3.25 16.446a4.98 4.98 0 00-.496.378c-.572.498-1.004 1.148-1.004 1.928s.432 1.43 1.004 1.928c.574.5 1.361.916 2.27 1.25 1.821.672 4.288 1.072 6.976 1.072 2.688 0 5.155-.4 6.977-1.072.908-.334 1.695-.75 2.269-1.25.572-.499 1.004-1.148 1.004-1.928s-.432-1.43-1.004-1.928a4.975 4.975 0 00-.496-.378v2.317c-.004.186-.108.454-.49.786-.387.337-.99.675-1.802.974-1.616.595-3.9.979-6.458.979-2.559 0-4.842-.384-6.458-.98-.811-.298-1.415-.636-1.803-.973-.38-.332-.485-.6-.489-.786v-2.317z" />
    </Svg>
  );
};
const CounterNearbyIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CounterNearbyIcon;
