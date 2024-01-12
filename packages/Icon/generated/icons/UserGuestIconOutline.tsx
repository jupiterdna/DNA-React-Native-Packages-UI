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
      <Path d="M16.882 6.475a1.375 1.375 0 10-2.75 0 1.375 1.375 0 002.75 0zm1.5 0a2.875 2.875 0 11-5.75 0 2.875 2.875 0 015.75 0zm1.88 8.86h-3.27v-1.5h2.52v-1.027l-.001-.001v-.003a.163.163 0 00-.017-.035.74.74 0 00-.165-.181c-.192-.162-.503-.334-.924-.49a8.019 8.019 0 00-1.467-.379c-.161-.634-.669-1.258-1.31-1.62 1.097.014 2.32.227 3.301.593.508.189.994.435 1.367.749.368.31.715.768.715 1.367v2.526h-.75zm-5.84 5.064a1.25 1.25 0 001.26-1.25l-.004-6.646c0-.69-.56-1.249-1.25-1.249h-2.565l.003-1.233a1.25 1.25 0 00-1.25-1.252h-2.61a1.25 1.25 0 00-1.25 1.248v1.237l-.693.001H4.214a1.245 1.245 0 00-1.224 1.237l.004 6.58a1.25 1.25 0 001.24 1.249l10.188.078zm-4.057-10.13l-.002.985h-2.11l.002-.985h2.11zm3.813 2.454l.003 6.175-.813-.007v-6.167h.81zm-7.43 6.117v-6.117h5.115l.005 6.157-5.12-.04zm-1.5-6.117v6.123l-.755-.006v-6.118h.755z" />
    </Svg>
  );
};
const UserGuestIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserGuestIconOutline;
