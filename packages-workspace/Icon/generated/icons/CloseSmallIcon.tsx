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
      <Path d="M18.75 6.301l-5.699 5.7 5.699 5.698-1.051 1.051L12 13.052 6.302 18.75 5.25 17.699 10.949 12 5.25 6.302 6.301 5.25 12 10.949l5.699-5.699 1.051 1.051z" />
    </Svg>
  );
};
const CloseSmallIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CloseSmallIcon;
