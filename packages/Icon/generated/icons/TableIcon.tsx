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
      <Path d="M20.826 8.297v-3.49c0-.834-.624-1.65-1.557-1.65H4.73c-.933 0-1.557.816-1.557 1.65v3.49h17.652zM9.558 9.797h4.883v4.771H9.558V9.797zM8.058 14.568V9.797H3.174v4.771h4.884zM3.174 16.068h4.884v4.772H4.73c-.933 0-1.557-.816-1.557-1.65v-3.122zM9.558 16.068h4.883v4.772H9.558v-4.772zM15.941 16.068v4.772h3.328c.933 0 1.557-.816 1.557-1.65v-3.122h-4.885zM20.826 14.568V9.797h-4.885v4.771h4.885z" />
    </Svg>
  );
};
const TableIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TableIcon;
