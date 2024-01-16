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
      <Path d="M6.674 4.25A2.25 2.25 0 018.924 2h9.162a2.25 2.25 0 012.25 2.25v12.49a2.25 2.25 0 01-2.25 2.25H8.924a2.25 2.25 0 01-2.25-2.25V4.25zM5.164 8.047V6.223h-1.5v1.824h1.5zM3.664 9.657v2.149h1.5V9.657h-1.5zM3.664 13.416v2.149h1.5v-2.149h-1.5zM3.664 17.176v1.073c0 .582.133 1.135.371 1.628l1.35-.651a2.283 2.283 0 01-.22-.977v-1.073h-1.5zM6.546 21.898c.28.066.57.101.868.101h1.17v-1.5h-1.17a2.24 2.24 0 01-.976-.222l-.652 1.352c.24.115.495.206.76.268zM10.339 21.999h2.34v-1.5h-2.34v1.5zM14.433 20.499v1.5h1.92v-1.5h-1.92z" />
    </Svg>
  );
};
const CopyAllIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CopyAllIcon;
