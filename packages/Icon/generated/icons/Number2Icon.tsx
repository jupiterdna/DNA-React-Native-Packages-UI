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
      <Path d="M5.75 3A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3H5.75zm1.406 2.983h2.768v5.397h-1.25V7.233H7.156v-1.25zm-.232 6.618h3.384c.51 0 .925.414.925.925v3.55c0 .51-.414.925-.925.925H6.924v-1.25h3.059v-.825H7.712v-1.25h2.27v-.825H6.925V12.6zm5.97-6.618h3.162c.511 0 .925.414.925.925V8.37c0 .511-.414.925-.925.925h-1.912v.839h2.837v1.25h-4.087V8.97c0-.51.415-.925.925-.925h1.912v-.812h-2.836v-1.25zm-.094 6.584h1.25v2.11h1.775v-2.11h1.25v5.47h-1.25v-2.11H12.8v-3.36z" />
    </Svg>
  );
};
const Number2Icon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default Number2Icon;
