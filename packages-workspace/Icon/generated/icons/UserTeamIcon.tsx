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
      <Path d="M2.998 2.75a.75.75 0 01.75-.75h9.5a.75.75 0 01.75.75v4.534a.75.75 0 01-.75.75H5.423l-2.425 2.014V2.75zM14.662 9.034c.51-.412.836-1.043.836-1.75V3h4.754a.75.75 0 01.75.75v7.298l-2.425-2.014h-3.915zM11.999 10.931a2.999 2.999 0 100 5.998 2.999 2.999 0 000-5.998zM6.1 23.004v-2.465c0-.488.265-.903.6-1.223.339-.324.801-.603 1.328-.83 1.058-.457 2.472-.75 3.972-.75 1.499 0 2.914.293 3.97.75.528.227.99.506 1.33.83.334.32.6.735.6 1.223v2.465H6.1zM20.599 15.867a2 2 0 10-4 0 2 2 0 004 0zM19.253 20.54v2.464h3.497v-2.022c0-.4-.202-.741-.457-1.004-.259-.266-.611-.494-1.013-.681-.724-.336-1.667-.564-2.68-.607.353.462.653 1.083.653 1.85zM5.401 13.867a2 2 0 100 4 2 2 0 000-4zM4.747 23.004v-2.465c0-.766.3-1.387.652-1.849-1.012.043-1.955.27-2.679.607-.402.187-.754.415-1.013.681-.255.262-.457.603-.457 1.004v2.022h3.497z" />
    </Svg>
  );
};
const UserTeamIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserTeamIcon;
