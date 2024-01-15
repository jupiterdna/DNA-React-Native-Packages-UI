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
      <Path d="M14.328 7.285a4.075 4.075 0 10-8.15 0 4.075 4.075 0 008.15 0zM14.546 14.009a2.25 2.25 0 00.674 2.046l.348.325a8.825 8.825 0 01-.951.952l-.44-.432a2.25 2.25 0 00-2.075-.588l-2.028.46a2.25 2.25 0 00-1.752 2.195v1.814H2v-3.447c0-.683.37-1.264.84-1.712.474-.453 1.12-.843 1.858-1.161 1.479-.638 3.458-1.047 5.555-1.047 1.546 0 3.028.222 4.293.595z" />
      <Path d="M20.25 12.316a.75.75 0 00-.75-.75h-2.314a.75.75 0 00-.734.6l-.428 2.097a.75.75 0 00.222.697l1.315 1.232a9.685 9.685 0 01-1.41 1.762 9.742 9.742 0 01-1.672 1.344l-1.353-1.327a.75.75 0 00-.691-.196l-2.029.46a.75.75 0 00-.584.732v2.275a.75.75 0 00.729.75c.917.026 2.46-.167 4.163-1.094l.016-.008a10.98 10.98 0 002.479-1.873 10.953 10.953 0 001.966-2.626c.815-1.536 1.075-2.994 1.075-4.075z" />
    </Svg>
  );
};
const UserPhoneIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserPhoneIcon;
