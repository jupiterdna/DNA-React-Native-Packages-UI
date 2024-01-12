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
      <Path d="M4.718 4.672a.069.069 0 01.017-.015h14.53a.068.068 0 01.017.015c.02.023.044.068.044.134v3.49H4.674v-3.49c0-.066.024-.111.044-.134zm16.108.134c0-.833-.624-1.649-1.557-1.649H4.73c-.933 0-1.557.816-1.557 1.65V19.19c0 .833.624 1.649 1.557 1.649H19.27c.933 0 1.557-.816 1.557-1.65V4.807zm-1.5 4.99v4.01H15.42v-4.01h3.907zm0 5.51v3.885a.202.202 0 01-.044.134.066.066 0 01-.017.015H15.42v-4.033h3.907zM13.92 19.34h-3.863v-4.033h3.863v4.033zm-5.363 0H4.735a.067.067 0 01-.017-.015.202.202 0 01-.044-.134v-3.884h3.882v4.033zm-3.882-5.533v-4.01h3.882v4.01H4.674zm5.382-4.01h3.863v4.01h-3.863v-4.01z" />
    </Svg>
  );
};
const TableIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TableIconOutline;
