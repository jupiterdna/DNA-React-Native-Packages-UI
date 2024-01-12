//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const SettingsIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M9.418 2.002h5.164l.428 3.15c.503.222.977.497 1.414.818l2.944-1.205 2.582 4.472-2.516 1.948a7.546 7.546 0 010 1.63l2.515 1.948-2.582 4.472-2.944-1.205c-.437.322-.91.596-1.413.818l-.428 3.15H9.418l-.428-3.15a7.477 7.477 0 01-1.415-.817l-2.942 1.204-2.582-4.472 2.513-1.945a7.554 7.554 0 010-1.635L2.051 9.237l2.582-4.471 2.942 1.203a7.471 7.471 0 011.415-.818l.428-3.149zM8.63 12a3.368 3.368 0 106.736 0 3.368 3.368 0 00-6.736 0z" />
    </Svg>
  );
};
export default SettingsIcon;
