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
      <Path d="M4.927 7.29a4.075 4.075 0 118.15 0 4.075 4.075 0 01-8.15 0zm4.075-2.576a2.575 2.575 0 100 5.15 2.575 2.575 0 000-5.15zM3.447 14.465c1.479-.638 3.458-1.047 5.555-1.047 2.097 0 4.076.409 5.555 1.047.737.319 1.384.708 1.859 1.162.468.447.839 1.028.839 1.711v3.448H.749v-3.448c0-.683.37-1.264.84-1.711.474-.454 1.12-.843 1.858-1.162zm-.822 2.246c-.311.297-.376.512-.376.628v1.947h13.506v-1.948c0-.115-.065-.33-.376-.627-.304-.29-.78-.594-1.416-.868-1.269-.548-3.041-.925-4.961-.925-1.92 0-3.692.377-4.96.925-.637.274-1.113.577-1.417.868zM19.925 9.025V5.65h-1.5v3.376h-3.376v1.5h3.376v3.376h1.5v-3.376h3.376v-1.5h-3.376z" />
    </Svg>
  );
};
const UserAddIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserAddIconOutline;
