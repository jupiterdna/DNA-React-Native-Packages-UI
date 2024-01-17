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
      <Path d="M11.248 20.56c3.968 0 7.306-2.7 8.275-6.364h1.544c-1.002 4.5-5.018 7.864-9.82 7.864-5.555 0-10.06-4.504-10.06-10.06 0-5.556 4.505-10.06 10.06-10.06 5.285 0 9.618 4.075 10.029 9.254h1.538v1.5h-1.53v.002H19.78v-.002H9.479l2.832 2.832-1.06 1.06L6.663 12l4.586-4.586 1.06 1.06-2.718 2.72H19.77a8.561 8.561 0 10-8.522 9.366z" />
    </Svg>
  );
};
const GoToLeftIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default GoToLeftIcon;
