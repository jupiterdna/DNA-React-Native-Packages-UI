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
      <Path d="M12.129 2.016C6.475 2.016 1.86 6.5 1.86 12.065c0 5.333 4.236 9.671 9.563 10.025l.025.002h.025c.753 0 1.438-.17 1.943-.601.525-.448.74-1.077.74-1.74 0-.328-.05-.6-.139-.841a2.796 2.796 0 00-.25-.496l-.015-.025a1.296 1.296 0 01-.135-.264 1.243 1.243 0 01-.053-.405c0-.218.046-.346.091-.424a.566.566 0 01.225-.21c.249-.138.65-.21 1.173-.21l.13.001c.426.005 1.384.015 2.417-.192 1.146-.23 2.527-.752 3.395-1.986 1.625-2.31 1.73-6.215-1.103-9.404-2.317-2.61-5.81-3.278-7.764-3.279zm-4.524 9.47a1.362 1.362 0 11-2.724 0 1.362 1.362 0 012.724 0zm1.707-2.72a1.362 1.362 0 110-2.724 1.362 1.362 0 010 2.724zm6.446-1.362a1.362 1.362 0 11-2.725 0 1.362 1.362 0 012.725 0zm1.748 5.445a1.362 1.362 0 110-2.724 1.362 1.362 0 010 2.724z" />
    </Svg>
  );
};
const ColorPaletteIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ColorPaletteIcon;