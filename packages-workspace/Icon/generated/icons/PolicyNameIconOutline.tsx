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
      <Path d="M12 5.216l.425.393c.622.576 1.43.755 2.542.775l.614.011v.614c0 1.86-.427 3.148-1.081 4.105-.64.936-1.467 1.503-2.134 1.96l-.366.252-.366-.251c-.666-.458-1.493-1.025-2.133-1.961-.654-.957-1.081-2.244-1.081-4.105v-.614l.613-.01c1.113-.021 1.92-.2 2.543-.776l.425-.393zm-.002 1.652v4.937l.002.002c.548-.388 1.059-.8 1.468-1.399.425-.622.767-1.488.846-2.804-.817-.067-1.612-.256-2.313-.738l-.003.002zM8.094 18.557h7.81v-1.25h-7.81v1.25zM8.094 15.874h7.81v-1.25h-7.81v1.25z" />
      <Path d="M4.588 5a2.25 2.25 0 012.25-2.25h10.324A2.25 2.25 0 0119.412 5v14a2.25 2.25 0 01-2.25 2.25H6.838A2.25 2.25 0 014.588 19V5zm2.25-.75a.75.75 0 00-.75.75v14c0 .414.336.75.75.75h10.324a.75.75 0 00.75-.75V5a.75.75 0 00-.75-.75H6.838z" />
    </Svg>
  );
};
const PolicyNameIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PolicyNameIconOutline;
