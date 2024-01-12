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
      <Path d="M16.611 1.778H7.124l-2.2 2.4-2.365 2.477v12.817a2.75 2.75 0 002.75 2.75h4.933l.01-2.777.62-.618H9.327l-.144-.239-.504-.829-.54.83-.156.238H6.088v-1h1.361l.828-1.235.43-.66.41.66.758 1.235h1.54v.002h.454l7.492-7.493V4.528a2.75 2.75 0 00-2.75-2.75zM6.704 6.206H5.062l.957-1.003.685-.747v1.75zm6.088 7.332H6.496v-1.25h6.296v1.25zM6.496 10.31V9.06h8.97v1.25h-8.97zM18.15 13.307a.75.75 0 011.045 0l2.017 1.957a.75.75 0 010 1.077l-1.323 1.284-3.089-3.008 1.35-1.31z" />
      <Path d="M18.883 18.584l-3.697 3.587H12.06V19.2l3.736-3.624 3.088 3.008z" />
    </Svg>
  );
};
const FileContractIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileContractIcon;
