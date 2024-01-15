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
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2.625 8.815l-.285 1.81h-1.47v4.38h-1.975v-4.38H9.293v-1.81h1.602v-1.38c0-1.571.943-2.44 2.388-2.44.477.006.953.047 1.424.122V8.66h-.809c-.783 0-1.029.484-1.029.979v1.177h1.756z" />
    </Svg>
  );
};
const SocialCircleFacebookIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SocialCircleFacebookIcon;
