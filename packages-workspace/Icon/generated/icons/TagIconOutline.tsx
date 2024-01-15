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
      <Path d="M16.314 6.38a1.307 1.307 0 102.614 0 1.307 1.307 0 00-2.614 0z" />
      <Path d="M22.003 3.769a1.75 1.75 0 00-1.75-1.75h-7.23a2.25 2.25 0 00-1.59.659l-8.92 8.92a1.75 1.75 0 000 2.474l7.437 7.437a1.75 1.75 0 002.475 0l8.92-8.92a2.25 2.25 0 00.658-1.59v-7.23zm-1.75-.25a.25.25 0 01.25.25v7.23a.75.75 0 01-.219.53l-8.92 8.919a.25.25 0 01-.353 0l-7.438-7.437a.247.247 0 01-.072-.16.246.246 0 01.072-.193l8.92-8.92a.75.75 0 01.53-.219h7.23z" />
    </Svg>
  );
};
const TagIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TagIconOutline;
