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
      <Path d="M10.941 2.055l-.036.004C5.897 2.605 2 6.847 2 12c0 5.153 3.897 9.395 8.905 9.94l.036.005v-1.51a8.502 8.502 0 010-16.87v-1.51zM12.982 21.953l.138-.015a9.955 9.955 0 005.077-2.089l-.93-1.177a8.455 8.455 0 01-4.285 1.772v1.51zM12.982 3.556a8.455 8.455 0 014.284 1.772l.93-1.177a9.956 9.956 0 00-5.076-2.09l-.138-.014v1.509zM18.632 6.683a8.456 8.456 0 011.816 4.368l1.49-.166a9.956 9.956 0 00-2.136-5.141l-1.17.939zM20.448 12.95a8.456 8.456 0 01-1.816 4.367l1.17.94a9.956 9.956 0 002.136-5.142l-1.49-.166z" />
      <Path d="M13.994 7.828h-3.988v4.35H7.424L12 16.756l4.576-4.576h-2.582v-4.35z" />
    </Svg>
  );
};
const DownloadProgressIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DownloadProgressIcon;
