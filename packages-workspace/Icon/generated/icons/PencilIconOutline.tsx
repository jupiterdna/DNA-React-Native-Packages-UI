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
      <Path d="M18.206 4.228a.75.75 0 00-1.06 0l-.15.149L19.61 6.99l.148-.149a.75.75 0 000-1.06l-1.552-1.553zm-2.121-1.06a2.25 2.25 0 013.182 0l1.552 1.552a2.25 2.25 0 010 3.182l-1.21 1.209-4.734-4.734 1.21-1.21zM13.82 5.45l4.743 4.743-11.3 11.298H2.522V16.75l11.3-11.3zm0 2.121l-9.799 9.8v2.62h2.621l9.8-9.799-2.622-2.62z" />
    </Svg>
  );
};
const PencilIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PencilIconOutline;
