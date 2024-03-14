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
      <Path d="M18.25 7c.52 0 .963.182 1.328.547.365.364.547.807.547 1.328v11.25c0 .52-.182.963-.547 1.328A1.808 1.808 0 0118.25 22h-7.5c-.52 0-.964-.182-1.328-.547a1.808 1.808 0 01-.547-1.328V15.75h1.25v4.375c0 .417.208.625.625.625h7.5c.417 0 .625-.208.625-.625V8.875c0-.417-.208-.625-.625-.625h-7.5c-.417 0-.625.208-.625.625v4.375h-1.25V8.875c0-.52.182-.964.547-1.328A1.808 1.808 0 0110.75 7h7.5zm-5-5c.52 0 .963.182 1.328.547.365.364.547.807.547 1.328v2.5h-1.25v-2.5c0-.417-.208-.625-.625-.625h-7.5c-.417 0-.625.208-.625.625v9.375c0 .417.208.625.625.625h6.758c.026 0 .065-.026.117-.078v-2.813c0-.052.013-.078.04-.078.025-.026.051-.039.077-.039l3.555 3.555c.026.026.039.065.039.117l-3.555 3.555c-.026.026-.052.039-.078.039l-.078-.078v-2.813c0-.026-.026-.065-.078-.117H5.75c-.52 0-.964-.182-1.328-.547a1.808 1.808 0 01-.547-1.328V3.875c0-.52.182-.964.547-1.328A1.808 1.808 0 015.75 2h7.5z" />
    </Svg>
  );
};
const CloneIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CloneIcon;
