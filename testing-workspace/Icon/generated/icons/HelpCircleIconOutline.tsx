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
      <Path d="M11.858 7.465c-1.065 0-1.497.592-1.712.919l-.413.626-1.253-.825.413-.626c.323-.49 1.15-1.594 2.965-1.594 1.08 0 1.937.372 2.523.973.576.59.85 1.36.85 2.087 0 .65-.126 1.18-.407 1.67-.265.463-.647.846-1.055 1.231-.86.81-1.115 1.104-1.115 1.66v.75h-1.5v-.75c0-1.26.762-1.977 1.513-2.683l.073-.069c.408-.384.64-.634.783-.885.128-.223.207-.486.207-.924 0-.362-.137-.748-.422-1.04-.275-.281-.73-.52-1.45-.52zM10.952 16.745a.979.979 0 111.958 0 .979.979 0 01-1.958 0z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" />
    </Svg>
  );
};
const HelpCircleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default HelpCircleIconOutline;
