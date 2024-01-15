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
      <Path d="M4 4.25A2.25 2.25 0 016.25 2h7.66L20 8.098V19.75A2.25 2.25 0 0117.75 22H6.25A2.25 2.25 0 014 19.75V4.25zm9.611-.427v4.562h4.555l-4.555-4.562zm2.378 11.32l-4.03-4.03-4.03 4.03 1.06 1.061 2.22-2.22v4.934h1.5v-4.933l2.22 2.22 1.06-1.061z" />
    </Svg>
  );
};
const FileUploadIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileUploadIcon;
