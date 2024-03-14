//this is auto-generated files please do not edit!
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const wrapper = (props: Props) => {
  return (
    <Svg
      width={25}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M10.763 5.85h.917V5h1.5v.85h1.75v1.5h-3.417v.9h2.583a.75.75 0 01.75.75v2.4a.75.75 0 01-.75.75h-.916V13h-1.5v-.85H9.93v-1.5h3.416v-.9h-2.583a.75.75 0 01-.75-.75V6.6a.75.75 0 01.75-.75zM8.43 16.25v-1.5h8v1.5h-8zM8.43 17.25v1.5h8v-1.5h-8z" />
      <Path d="M6.43 2.25A1.75 1.75 0 004.68 4v16c0 .966.783 1.75 1.75 1.75h12A1.75 1.75 0 0020.18 20V4a1.75 1.75 0 00-1.75-1.75h-12zM6.18 4a.25.25 0 01.25-.25h12a.25.25 0 01.25.25v16a.25.25 0 01-.25.25h-12a.25.25 0 01-.25-.25V4z" />
    </Svg>
  );
};
const QuotationIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default QuotationIconOutline;
