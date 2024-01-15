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
      <Path d="M2.25 4.205v15.59h1.5V12.75h7.5v7.045h1.5V4.205h-1.5v7.045h-7.5V4.205h-1.5zM16.555 11.74a1.975 1.975 0 013.95 0c0 .41-.226.912-.66 1.507-.314.43-.672.827-1.027 1.221-.134.149-.267.297-.397.446-.29.331-.538.62-.793.916-.532.618-1.092 1.27-2.114 2.409l-.192.214v1.346h6.397v-1.5h-4.25c.546-.62.936-1.073 1.307-1.503.253-.294.496-.577.774-.895.101-.116.215-.242.337-.377.368-.409.806-.895 1.17-1.392.48-.658.948-1.487.948-2.393a3.475 3.475 0 00-6.95 0h1.5z" />
    </Svg>
  );
};
const Heading2Icon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default Heading2Icon;
