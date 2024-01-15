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
      <Path d="M14.546 9.403L12 3.407 9.454 9.403l-6.49.569 4.916 4.274-1.464 6.347L12 17.239l5.584 3.354-1.464-6.347 4.915-4.274-6.489-.57zm2.84 1.754l-2.93 2.548.872 3.784-3.328-2-3.329 2 .873-3.784-2.93-2.548 3.868-.339L12 7.244l1.518 3.574 3.868.34z" />
    </Svg>
  );
};
const StarIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StarIconOutline;
