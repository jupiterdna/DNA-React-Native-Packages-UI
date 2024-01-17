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
      <Path d="M4.927 7.285a4.075 4.075 0 118.15 0 4.075 4.075 0 01-8.15 0zM9.002 4.71a2.575 2.575 0 100 5.15 2.575 2.575 0 000-5.15zM3.447 14.461c1.479-.638 3.458-1.047 5.555-1.047 2.097 0 4.076.409 5.555 1.047.737.318 1.384.708 1.859 1.161.468.448.839 1.029.839 1.712v3.447H.749v-3.447c0-.683.37-1.264.84-1.712.474-.453 1.12-.843 1.858-1.161zm-.822 2.246c-.311.297-.376.512-.376.627v1.947h13.506v-1.947c0-.115-.065-.33-.376-.627-.304-.291-.78-.594-1.416-.869-1.269-.547-3.041-.924-4.961-.924-1.92 0-3.692.377-4.96.924-.637.275-1.113.578-1.417.869zM22.073 9.02h-5.601v1.5h5.6v-1.5z" />
    </Svg>
  );
};
const UserRemoveIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserRemoveIconOutline;
