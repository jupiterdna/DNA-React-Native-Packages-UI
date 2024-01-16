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
      <Path d="M12.68 2.536c.47 0 .926.146 1.307.418l4.078 2.91 2.972.537.013.003c.63.126 1.118.535 1.436.992.318.458.513 1.03.513 1.594v2.95a.75.75 0 01-.75.75h-2.204v-.738a1.898 1.898 0 10-3.797 0v.738H8.191v-.738a1.898 1.898 0 10-3.796 0v.738H1.75a.75.75 0 01-.75-.75V7.851c0-.55.201-1.08.566-1.491L4.28 3.294a2.25 2.25 0 011.684-.758h6.716zm-2.136 1.5v1.818l.001.75h5.977l-3.405-2.428a.752.752 0 00-.436-.14h-2.137zm-4.58 0a.75.75 0 00-.56.253l-2.05 2.315h5.69V4.036h-3.08zM3.605 18.804a2.66 2.66 0 015.247-.625h2.247a1.289 1.289 0 012.255 0h2.247a2.661 2.661 0 110 1.25h-2.247a1.288 1.288 0 01-2.255 0H8.852a2.661 2.661 0 01-5.247-.625zm2.66-1.16a1.16 1.16 0 100 2.32 1.16 1.16 0 000-2.32zm11.922 0a1.16 1.16 0 100 2.32 1.16 1.16 0 000-2.32z" />
    </Svg>
  );
};
const CarPartsIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarPartsIcon;
