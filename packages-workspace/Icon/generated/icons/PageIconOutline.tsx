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
      <Path d="M6.25 20.495a.75.75 0 01-.75-.75v-15.5a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v9.865h-6.389v6.385H6.25zm7.361-.323V15.61h4.555l-4.555 4.562zM4 19.745a2.25 2.25 0 002.25 2.25h7.66L20 15.897V4.245a2.25 2.25 0 00-2.25-2.25H6.25A2.25 2.25 0 004 4.245v15.5z" />
    </Svg>
  );
};
const PageIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PageIconOutline;
