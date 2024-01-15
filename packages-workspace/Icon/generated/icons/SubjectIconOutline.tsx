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
      <Path d="M7.865 11.62L2.08 8.006v-1.77l5.785 3.615 8.386-5.24a.75.75 0 00-.644-.365H2.08v-1.5h13.527a2.25 2.25 0 012.25 2.25v3.283l-1.5 1.496V6.313L7.865 11.62zM7.513 18.596H2.08v-1.5h6.937l-1.504 1.5zM20.535 10.013a1.627 1.627 0 00-2.3 0l-1.306 1.305 3.208 3.208 1.305-1.306a1.627 1.627 0 000-2.3l-.907-.907zm-1.24 1.06c.05-.05.13-.05.18 0l.907.907c.05.05.05.13 0 .18l-.245.244-1.086-1.086.244-.245zM19.837 14.84l-3.212-3.213-6.409 6.416v3.212h3.213l6.408-6.416zm-8.12 3.823l4.908-4.914 1.092 1.091-4.91 4.915h-1.09v-1.091z" />
    </Svg>
  );
};
const SubjectIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SubjectIconOutline;
