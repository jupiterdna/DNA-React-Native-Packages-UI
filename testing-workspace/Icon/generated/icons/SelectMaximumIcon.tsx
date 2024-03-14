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
      <Path d="M2.625 4.875a2.25 2.25 0 012.25-2.25h14.25a2.25 2.25 0 012.25 2.25v14.25a2.25 2.25 0 01-2.25 2.25h-.865l-.001-15.632H2.625v-.868z" />
      <Path d="M2.625 7.246h2.066v1.5h-.566v.566h-1.5V7.246zM6.27 7.246H8.9v1.5H6.27v-1.5zM10.479 7.246h2.63v1.5h-2.63v-1.5zM14.688 7.246h2.066v2.066h-1.5v-.566h-.566v-1.5zM16.754 10.89v2.631h-1.5v-2.63h1.5zM2.625 13.521v-2.63h1.5v2.63h-1.5zM2.625 17.73V15.1h1.5v2.63h-1.5zM16.754 15.1v2.63h-1.5V15.1h1.5zM2.625 19.31h1.5v.565h.566v1.5H2.625v-2.066zM16.754 19.31v2.065h-2.066v-1.5h.566v-.566h1.5zM8.9 21.375H6.27v-1.5H8.9v1.5zM13.11 21.375h-2.631v-1.5h2.63v1.5z" />
    </Svg>
  );
};
const SelectMaximumIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SelectMaximumIcon;
