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
      <Path d="M21.479 22.538l-1.962-1.962a2.26 2.26 0 01-.472.05H5.596a2.25 2.25 0 01-2.25-2.25V4.925c0-.16.017-.317.05-.469L1.46 2.523l1.06-1.06L22.54 21.476l-1.06 1.06zm-9.96-7.777l-2.11-2.338-3.253 4.315h9.524l-3.186-3.208-.975 1.231zM21.295 17.407V4.927a2.25 2.25 0 00-2.25-2.25H6.56l14.735 14.73z" />
    </Svg>
  );
};
const ImageDisabledIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageDisabledIcon;
