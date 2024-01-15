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
      <Path d="M14.572 3.995H9.41v5.164h1.832v2.091H3.568v3.591H1.75v5.165h5.164V14.84H5.068v-2.09h6.174v2.09h-1.83v5.165h5.164V14.84h-1.834v-2.09h6.175v2.09h-1.831v5.165h5.164V14.84h-1.833v-3.59h-7.675V9.159h1.83V3.995z" />
    </Svg>
  );
};
const ClassIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ClassIcon;
