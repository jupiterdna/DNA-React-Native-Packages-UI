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
      <Path d="M2 12C2 6.477 6.478 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10C6.478 22 2 17.523 2 12zm9.858-4.535c.72 0 1.175.24 1.45.52.285.292.422.678.422 1.04 0 .438-.079.7-.207.924-.144.25-.375.5-.783.885l-.073.07c-.751.705-1.514 1.422-1.514 2.682v.75h1.5v-.75c0-.336.093-.576.357-.892.173-.207.419-.447.759-.768.408-.385.79-.768 1.055-1.23.281-.49.406-1.021.406-1.671a3 3 0 00-.85-2.087c-.585-.601-1.442-.973-2.522-.973-1.815 0-2.642 1.103-2.965 1.594l-.413.626 1.253.825.412-.626c.216-.327.648-.919 1.713-.919zm-.906 9.28a.98.98 0 101.958 0 .98.98 0 00-1.958 0z" />
    </Svg>
  );
};
const HelpCircleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default HelpCircleIcon;
