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
      <Path d="M14.132 12.03v-.352c0-.447-.242-.792-.48-1.02a3.024 3.024 0 00-.89-.56c-.665-.288-1.534-.464-2.442-.464h-.197v.003c-.836.023-1.629.194-2.247.46a3.024 3.024 0 00-.89.561c-.237.228-.48.573-.48 1.02v.351H4.753v1.5h.676v5.524h13.15v-5.524h.674v-1.5h-5.12zm-1.5 0H8.007v-.271a1.568 1.568 0 01.464-.284c.455-.197 1.118-.341 1.849-.341.73 0 1.393.144 1.848.34a1.568 1.568 0 01.464.285v.27zm-5.704 5.523v-4.024h10.15v4.024H6.928zM10.32 4.947a2.107 2.107 0 100 4.215 2.107 2.107 0 000-4.215zm-.608 2.108a.607.607 0 111.215 0 .607.607 0 01-1.215 0z" />
      <Path d="M4.252 2a2.25 2.25 0 00-2.25 2.25v15.5A2.25 2.25 0 004.252 22h15.5a2.25 2.25 0 002.25-2.25V4.25A2.25 2.25 0 0019.752 2h-15.5zm-.75 2.25a.75.75 0 01.75-.75h15.5a.75.75 0 01.75.75v15.5a.75.75 0 01-.75.75h-15.5a.75.75 0 01-.75-.75V4.25z" />
    </Svg>
  );
};
const CounterSquareIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CounterSquareIconOutline;
