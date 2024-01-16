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
      <Path d="M14.993 12l2.62-2.62-1.061-1.06-2.62 2.62-2.62-2.62-1.06 1.06 2.62 2.62-2.62 2.62 1.06 1.06 2.62-2.62 2.62 2.62 1.061-1.06-2.62-2.62z" />
      <Path d="M9.211 5.075a2.25 2.25 0 00-1.826.936l-4.309 5.984 4.31 5.985a2.25 2.25 0 001.825.935h9.531a2.25 2.25 0 002.25-2.25v-9.34a2.25 2.25 0 00-2.25-2.25H9.211zm-.609 1.812a.75.75 0 01.609-.312h9.531a.75.75 0 01.75.75v9.34a.75.75 0 01-.75.75H9.211a.75.75 0 01-.609-.311l-3.677-5.109 3.677-5.108z" />
    </Svg>
  );
};
const CloseBackspaceIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CloseBackspaceIconOutline;
