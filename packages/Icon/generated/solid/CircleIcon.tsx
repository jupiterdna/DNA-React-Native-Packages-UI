//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CircleIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12.002 22.3c-1.425 0-2.764-.27-4.017-.81a10.404 10.404 0 01-3.271-2.202 10.4 10.4 0 01-2.202-3.27 10.025 10.025 0 01-.812-4.016c0-1.429.271-2.772.813-4.03a10.437 10.437 0 012.205-3.28 10.224 10.224 0 013.27-2.193 10.14 10.14 0 014.01-.799c1.43 0 2.772.266 4.03.798a10.225 10.225 0 013.28 2.193c.93.93 1.662 2.023 2.194 3.28.532 1.257.798 2.6.798 4.03 0 1.429-.266 2.767-.798 4.015a10.247 10.247 0 01-2.192 3.265 10.43 10.43 0 01-3.28 2.206c-1.257.542-2.6.813-4.028.813z" />
    </Svg>
  );
};
export default CircleIcon;
