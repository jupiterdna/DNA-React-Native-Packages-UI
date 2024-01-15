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
      <Path d="M9.536 13.685H3.563v.368a.949.949 0 01-.95.949H2.36a.949.949 0 01-.949-.95l.001-5.213 1.308-3.61c.211-.582.765-.97 1.384-.97h6.72c.62 0 1.174.388 1.385.97l.876 2.419a7.17 7.17 0 00-1.889 1.594H3.047v2.806h6.709a7.14 7.14 0 00-.22 1.637zm1.148-3.752a7.11 7.11 0 00-.754 1.535.87.87 0 11.754-1.535zm.645-2.327l-.62-1.711H4.22l-.62 1.71h7.73zm-5.691 3.023a.87.87 0 11-1.74 0 .87.87 0 011.74 0zm14.457 1.824l-4.193 4.194-2.638-2.639 1.06-1.06 1.578 1.577 3.133-3.133 1.06 1.061zm-7.849 1.366a4.422 4.422 0 118.845 0 4.422 4.422 0 01-8.845 0zm4.423-5.923a5.923 5.923 0 100 11.845 5.923 5.923 0 000-11.845z" />
    </Svg>
  );
};
const CarPreppedIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarPreppedIconOutline;
