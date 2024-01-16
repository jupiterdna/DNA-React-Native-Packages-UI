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
      <Path d="M4.25 2A2.25 2.25 0 002 4.25v15.5A2.25 2.25 0 004.25 22h15.5A2.25 2.25 0 0022 19.75V4.25A2.25 2.25 0 0019.75 2H4.25zm9.14 13.45l-1.442-1.401-.694 3.12-5.035-1.021.3-1.468 3.442.695 1.148-5.763-1.23.534v2.45h-1.51V9.157l2.822-1.215c.426-.184.744-.303.953-.357.21-.054.402-.08.579-.08.273 0 .513.061.72.186.207.125.386.305.536.54l.702 1.158a3.4 3.4 0 001.266 1.227c.533.3 1.143.453 1.832.456v1.51c-.854-.022-1.609-.191-2.263-.506a4.484 4.484 0 01-1.67-1.4l-.434 2.22 1.488 1.431v5.432h-1.51v-4.31zm-.628-8.687a1.425 1.425 0 01-.423-1.05c0-.417.141-.767.423-1.05a1.425 1.425 0 011.05-.422c.417 0 .767.141 1.049.423.282.282.422.632.422 1.05 0 .417-.14.767-.422 1.049a1.425 1.425 0 01-1.05.422c-.417 0-.767-.14-1.049-.422z" />
    </Svg>
  );
};
const UserRunSquareIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserRunSquareIcon;
