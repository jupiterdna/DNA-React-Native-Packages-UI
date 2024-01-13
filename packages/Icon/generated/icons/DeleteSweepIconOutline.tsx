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
      <Path d="M4.938 6.36V6.1c0-.966.783-1.75 1.75-1.75h2.435c.966 0 1.75.784 1.75 1.75v.26h3.258v1.5h-1.002v9.29a2.25 2.25 0 01-2.25 2.25H4.934a2.25 2.25 0 01-2.25-2.25V7.86H1.68v-1.5h3.256zm1.5-.26v.26h2.935V6.1a.25.25 0 00-.25-.25H6.688a.25.25 0 00-.25.25zm5.19 1.76H4.185v9.29c0 .415.335.75.75.75h5.945a.75.75 0 00.75-.75V7.86zM22.34 9.87v-1.5h-7.25v1.5h7.25zM15.09 13.955h6.208v-1.5H15.09v1.5zM19.243 18.04h-4.152v-1.5h4.152v1.5z" />
    </Svg>
  );
};
const DeleteSweepIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DeleteSweepIconOutline;
