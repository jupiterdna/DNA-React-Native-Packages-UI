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
      <Path d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75zm8.927 1.715c.72 0 1.174.239 1.449.52.285.292.423.678.423 1.04 0 .438-.08.701-.208.924-.143.25-.375.5-.783.885l-.073.07c-.75.705-1.513 1.422-1.513 2.682v.75h1.5v-.75c0-.556.255-.85 1.115-1.66.409-.385.79-.768 1.056-1.23.28-.49.406-1.021.406-1.671 0-.728-.273-1.497-.85-2.087-.586-.601-1.442-.973-2.522-.973-1.815 0-2.642 1.103-2.966 1.594l-.412.626L9.8 9.01l.413-.626c.215-.327.648-.919 1.713-.919zm-.906 9.28a.979.979 0 101.957 0 .979.979 0 00-1.957 0z" />
    </Svg>
  );
};
const HelpSquareIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default HelpSquareIcon;
