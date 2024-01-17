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
      <Path d="M3.75 2.25A1.75 1.75 0 002 4v2c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 6V4a1.75 1.75 0 00-1.75-1.75H3.75zM3.5 4a.25.25 0 01.25-.25h16.5a.25.25 0 01.25.25v2a.25.25 0 01-.25.25H3.75A.25.25 0 013.5 6V4zM3.75 9.25A1.75 1.75 0 002 11v2c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 008.5 13v-2a1.75 1.75 0 00-1.75-1.75h-3zM3.5 11a.25.25 0 01.25-.25h3A.25.25 0 017 11v2a.25.25 0 01-.25.25h-3A.25.25 0 013.5 13v-2zM2 18c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v2a1.75 1.75 0 01-1.75 1.75h-3A1.75 1.75 0 012 20v-2zm1.75-.25a.25.25 0 00-.25.25v2c0 .138.112.25.25.25h3A.25.25 0 007 20v-2a.25.25 0 00-.25-.25h-3zM10.615 11.75h10.397v-1.5H10.615v1.5zM21.012 20.75H10.615v-1.5h10.397v1.5zM10.615 16.25h10.397v-1.5H10.615v1.5z" />
    </Svg>
  );
};
const ContentIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ContentIconOutline;
