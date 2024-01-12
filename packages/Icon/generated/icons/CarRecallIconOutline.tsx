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
      <Path d="M11.067 16.625a6.846 6.846 0 001.678-1.5h.598a3.001 3.001 0 015.811 0H21.5v-2.61a1.25 1.25 0 00-1.005-1.226l-3.615-.723-3.721-3.721a.75.75 0 00-.388-.206 6.845 6.845 0 00-1.677-1.514h1.534c.597 0 1.17.237 1.591.659l3.4 3.4 3.17.634a2.75 2.75 0 012.21 2.697v3.36a.75.75 0 01-.75.75h-3.094a3.001 3.001 0 01-5.81 0h-2.277zm6.682-.75a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM9.724 8.04a3.619 3.619 0 00-5.835 3.454l1.107-1.043.904.96-2.523 2.377L1 11.264l.96-.904.555.59a4.937 4.937 0 018.179-3.817l-.97.906z" />
      <Path d="M4.293 14.702a4.937 4.937 0 008.06-3.917l.556.59.96-.905-2.377-2.523-2.523 2.377.904.96 1.107-1.043a3.619 3.619 0 01-5.715 3.547l-.972.914z" />
    </Svg>
  );
};
const CarRecallIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarRecallIconOutline;
