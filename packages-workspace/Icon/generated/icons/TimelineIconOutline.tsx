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
      <Path d="M20.904 10.231a2.191 2.191 0 10-1.987-1.267l-3.001 3.001a2.182 2.182 0 00-1.02-.25c-.375 0-.728.094-1.037.26l-1.908-1.909a2.191 2.191 0 10-4.042.021l-3.886 3.887a2.191 2.191 0 101.06 1.061l3.852-3.851c.297.151.634.236.99.236.365 0 .71-.089 1.012-.246l1.923 1.922a2.191 2.191 0 104.066-.02l3.05-3.05c.283.132.597.205.928.205zm0-1.5a.691.691 0 110-1.383.691.691 0 010 1.383zM9.926 9.921a.691.691 0 110-1.383.691.691 0 010 1.382zm-6.83 6.73a.691.691 0 110-1.382.691.691 0 010 1.383zm12.492-2.745a.691.691 0 11-1.383 0 .691.691 0 011.383 0z" />
    </Svg>
  );
};
const TimelineIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TimelineIconOutline;
