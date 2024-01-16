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
      <Path d="M6.25 2A2.25 2.25 0 004 4.25v15.5A2.25 2.25 0 006.25 22h11.5A2.25 2.25 0 0020 19.75V8.098L13.91 2H6.25zm11.916 6.385h-4.555V3.823l4.555 4.562zM6.654 11.708a.63.63 0 01.631-.63h2.881v1.965H6.654v-1.335zm4.762-.63h5.361a.64.64 0 01.389.133.634.634 0 01.242.497v1.335h-5.992v-1.965zm-4.762 3.214h3.512v1.964H6.654v-1.964zm4.762 0h5.992v1.964h-5.992v-1.964zm-4.762 3.214h3.512v1.965h-2.88a.63.63 0 01-.632-.63v-1.335zm4.762 0h5.992v1.335a.63.63 0 01-.63.63h-5.362v-1.965z" />
    </Svg>
  );
};
const FileStatementIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileStatementIcon;
