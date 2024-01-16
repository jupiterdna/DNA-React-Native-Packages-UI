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
      <Path d="M5.805 13.807l4.242-4.243 1.061 1.06-3.183 3.184 3.183 3.183-1.06 1.06-4.243-4.242v-.002zM18.195 13.807l-4.242-4.243-1.061 1.06 3.183 3.184-3.183 3.183 1.06 1.06 4.243-4.242v-.002z" />
      <Path d="M8.887 4.557a3.113 3.113 0 016.226 0H21v18H3v-18h5.887zM12 2.943c-.891 0-1.613.723-1.613 1.614h3.226c0-.891-.722-1.614-1.613-1.614zM4.5 21.057h15v-15h-15v15z" />
    </Svg>
  );
};
const IntegrationIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default IntegrationIconOutline;
