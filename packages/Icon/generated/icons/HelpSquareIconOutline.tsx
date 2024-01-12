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
      <Path d="M11.927 7.465c-1.065 0-1.498.592-1.713.919l-.413.626-1.252-.825.412-.626c.324-.49 1.15-1.594 2.966-1.594 1.08 0 1.936.372 2.523.973.576.59.849 1.36.849 2.087 0 .65-.125 1.18-.406 1.67-.266.463-.648.846-1.056 1.231-.86.81-1.115 1.104-1.115 1.66v.75h-1.5v-.75c0-1.26.762-1.977 1.513-2.683l.073-.069c.408-.384.64-.634.783-.885.128-.223.208-.486.208-.924 0-.362-.138-.748-.423-1.04-.275-.281-.73-.52-1.45-.52zM11.02 16.745a.979.979 0 111.958 0 .979.979 0 01-1.957 0z" />
      <Path d="M5.75 3A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3H5.75zM4.5 5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25V5.75z" />
    </Svg>
  );
};
const HelpSquareIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default HelpSquareIconOutline;
