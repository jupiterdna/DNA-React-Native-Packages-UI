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
      <Path d="M4.278 5.567a.75.75 0 00-.75.75l-.005 11.612c0 .415.336.75.75.75h15.445a.75.75 0 00.75-.75V8.583a.75.75 0 00-.75-.75h-8.474L8.99 5.567H4.278zm-2.25.749a2.25 2.25 0 012.25-2.25h5.337l2.253 2.266h7.85a2.25 2.25 0 012.25 2.25v9.348a2.25 2.25 0 01-2.25 2.25H4.273a2.25 2.25 0 01-2.25-2.251l.005-11.613z" />
    </Svg>
  );
};
const FolderCloseIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FolderCloseIconOutline;
