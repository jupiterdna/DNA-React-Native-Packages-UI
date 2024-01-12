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
      <Path d="M6.25 3.495a.75.75 0 00-.75.75v15.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75V9.88h-6.389V3.495H6.25zm7.361.323V8.38h4.555l-4.555-4.562zM4 4.245a2.25 2.25 0 012.25-2.25h7.66L20 8.094v11.651a2.25 2.25 0 01-2.25 2.25H6.25A2.25 2.25 0 014 19.745v-15.5z" />
    </Svg>
  );
};
const FileIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileIconOutline;
