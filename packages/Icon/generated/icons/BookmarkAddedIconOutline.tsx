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
      <Path d="M18.033 8.467l4.585-4.586-1.06-1.06-3.525 3.524-1.417-1.416-1.06 1.06 2.477 2.478zM6.589 5.36a.75.75 0 01.75-.75H13.1v-1.5H7.339a2.25 2.25 0 00-2.25 2.25v15.517l6.913-2.968 6.913 2.968v-9.992h-1.5V18.6l-5.413-2.324L6.589 18.6V5.36z" />
    </Svg>
  );
};
const BookmarkAddedIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BookmarkAddedIconOutline;
