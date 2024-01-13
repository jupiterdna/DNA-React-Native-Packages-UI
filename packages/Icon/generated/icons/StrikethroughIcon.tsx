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
      <Path d="M8.256 5.351c.906-.734 2.187-1.13 3.747-1.13 1.246 0 2.444.248 3.388.536.304.092.589.19.847.29v1.63a9.58 9.58 0 00-1.283-.485c-.848-.258-1.894-.47-2.952-.47-1.32 0-2.234.334-2.803.795-.555.45-.837 1.063-.837 1.776 0 .708.35 1.232 1.026 1.674.704.461 1.692.78 2.778 1.023l.036.008h-3.95c-.807-.624-1.39-1.502-1.39-2.705 0-1.149.474-2.197 1.393-2.942zM16.768 13.998h3.972v-1.5H3.26v1.5h11.786c.349.442.565 1.032.565 1.866 0 .563-.178.955-.433 1.25-.267.31-.65.547-1.096.723-.903.355-1.882.388-2.08.388h-.035c-.506.002-2.834.006-4.988-1.211v1.681c2.272 1.04 4.486 1.032 4.978 1.03h.046c.269 0 1.468-.036 2.629-.493.585-.23 1.204-.585 1.682-1.138.49-.567.797-1.306.797-2.23 0-.714-.122-1.333-.343-1.866z" />
    </Svg>
  );
};
const StrikethroughIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StrikethroughIcon;
