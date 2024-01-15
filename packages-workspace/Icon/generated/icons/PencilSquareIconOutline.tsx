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
      <Path d="M21.495 2.782c-.706-.706-1.907-.859-2.675-.09l-1.731 1.73 4.014 4.014 1.73-1.73c.77-.769.617-1.97-.09-2.676l-1.248-1.248zm-1.615.97c.074-.074.32-.145.555.09l1.248 1.249c.235.235.164.48.09.554l-.67.67-1.893-1.893.67-.67zM19.856 9.712l-4.02-4.02-6.666 6.665v4.02h4.02l6.666-6.665zm-9.186 3.266l5.165-5.165 1.9 1.9-5.166 5.164H10.67v-1.899z" />
      <Path d="M5.75 4.503h8.44l-1.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-6.871l1.5-1.5v8.371a2.75 2.75 0 01-2.75 2.75H5.75A2.75 2.75 0 013 19.753v-12.5a2.75 2.75 0 012.75-2.75z" />
    </Svg>
  );
};
const PencilSquareIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PencilSquareIconOutline;
