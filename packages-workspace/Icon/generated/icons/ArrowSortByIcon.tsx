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
      <Path d="M20.58 16.414l1.06 1.06-4.585 4.587-4.586-4.586 1.06-1.061 2.72 2.719V3h1.5v16.246l2.831-2.832zM10.58 7.586l1.06-1.06L7.056 1.94 2.469 6.526l1.06 1.06 2.72-2.718V21h1.5V4.755l2.831 2.831z" />
    </Svg>
  );
};
const ArrowSortByIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ArrowSortByIcon;
