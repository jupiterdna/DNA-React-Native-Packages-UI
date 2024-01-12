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
      <Path d="M5.6 9.442a4.875 4.875 0 117.59 4.05c.261.429.478.887.646 1.368.212-.131.415-.275.61-.43l6.567 6.568 1.06-1.061-6.572-6.572a6.375 6.375 0 10-11.303-2.808c.461-.193.947-.339 1.45-.433a5.064 5.064 0 01-.047-.682z" />
      <Path d="M12.24 17.25a5.25 5.25 0 11-10.501 0 5.25 5.25 0 0110.5 0zm-4.19 0l1.626-1.626-1.06-1.061-1.627 1.627-1.627-1.627-1.06 1.06 1.626 1.627-1.626 1.627 1.06 1.06 1.627-1.626 1.627 1.626 1.06-1.06L8.05 17.25z" />
    </Svg>
  );
};
const SearchOffIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SearchOffIcon;
