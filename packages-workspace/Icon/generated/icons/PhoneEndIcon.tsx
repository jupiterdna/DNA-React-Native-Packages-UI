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
      <Path d="M7.643 10.35v3.131a.75.75 0 01-.295.596L4.4 16.327a.75.75 0 01-.986-.065l-2.345-2.347a.75.75 0 01-.025-1.033c2.538-2.804 6.662-4.791 10.98-4.762 1.879-.012 3.717.357 5.4 1.004 2.191.843 4.137 2.165 5.58 3.758a.75.75 0 01-.026 1.033l-2.345 2.347a.75.75 0 01-.986.066l-2.948-2.25a.75.75 0 01-.295-.597V10.35a13.223 13.223 0 00-4.375-.729h-.011a13.225 13.225 0 00-4.375.73z" />
    </Svg>
  );
};
const PhoneEndIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PhoneEndIcon;
