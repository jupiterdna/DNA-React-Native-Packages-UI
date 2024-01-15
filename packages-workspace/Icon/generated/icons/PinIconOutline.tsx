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
      <Path d="M8.113 3.962H7.026v-1.5h10.003v1.5h-1.087v7.558l2.076 1.985-.001 1.853H12.75v6.84l-.75.75-.75-.75v-6.84H6.038v-1.853l2.075-1.985V3.962zm1.5 0v8.2l-1.775 1.696h8.38l-1.776-1.697v-8.2h-4.83z" />
    </Svg>
  );
};
const PinIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PinIconOutline;
