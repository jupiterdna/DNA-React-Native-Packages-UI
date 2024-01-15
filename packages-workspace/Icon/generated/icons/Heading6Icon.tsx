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
      <Path d="M2.25 4.205v15.59h1.5V12.75h7.5v7.045h1.5V4.205h-1.5v7.045h-7.5V4.205h-1.5zM15.31 14.552l3.632-6.31h1.73l-2.61 4.535a3.75 3.75 0 11-2.752 1.775zm1.218.89a2.25 2.25 0 10.073-.127l-.073.128z" />
    </Svg>
  );
};
const Heading6Icon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default Heading6Icon;
