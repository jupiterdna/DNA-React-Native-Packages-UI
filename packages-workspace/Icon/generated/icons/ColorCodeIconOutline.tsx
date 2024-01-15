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
      <Path d="M5.898 18.961a1.03 1.03 0 10.002-2.06 1.03 1.03 0 00-.002 2.06z" />
      <Path d="M2.688 3.688a1 1 0 011-1H8.11a1 1 0 011 1V18.1a3.212 3.212 0 11-6.424 0V3.688zm1.5 14.413a1.711 1.711 0 103.423 0V4.188H4.188V18.1zM18.363 10.18l-7.752 7.751v-2.12l6.338-6.338-2.422-2.421-3.916 3.916V8.847l3.21-3.21a.963.963 0 01.185-.146l.053-.03a.999.999 0 011.176.177l3.128 3.128a1 1 0 010 1.414zM9.352 21.313h10.96a1 1 0 001-1v-4.424a1 1 0 00-1-1h-4.537l-1.5 1.5h5.537v3.424h-8.96l-1.5 1.5z" />
    </Svg>
  );
};
const ColorCodeIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ColorCodeIconOutline;
