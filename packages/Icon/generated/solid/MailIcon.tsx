//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const MailIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2 6.325a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 6.325v11.35a2.25 2.25 0 01-2.25 2.25H4.25A2.25 2.25 0 012 17.675V6.325zm10.007 4.856l-8.018-5.01-.122 1.693 8.14 5.086 8.132-5.082-.122-1.692-8.01 5.005z" />
    </Svg>
  );
};
export default MailIcon;
