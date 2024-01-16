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
      <Path d="M2.647 13.374l1.36 1.362 2.132-1.628v-2.146a13.184 13.184 0 00-3.492 2.412zm4.992-3.027v3.133a.75.75 0 01-.295.596l-2.948 2.25a.75.75 0 01-.986-.066l-2.345-2.346a.75.75 0 01-.025-1.034c2.538-2.804 6.662-4.79 10.98-4.761 1.879-.013 3.717.356 5.4 1.003 2.191.843 4.137 2.165 5.58 3.758a.75.75 0 01-.026 1.034l-2.345 2.346a.75.75 0 01-.986.066l-2.948-2.25a.75.75 0 01-.295-.597v-3.131a13.223 13.223 0 00-4.375-.73h-.01a13.224 13.224 0 00-4.376.73zm10.261.615v2.146l2.132 1.628 1.36-1.362a13.187 13.187 0 00-3.492-2.412z" />
    </Svg>
  );
};
const PhoneEndIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PhoneEndIconOutline;
