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
      <Path d="M14.7 1.95H9.298L7.26 4.195H4.27a2.25 2.25 0 00-2.25 2.25v11.319a2.25 2.25 0 002.25 2.25h6.937a7.472 7.472 0 01-.198-3.794 4.127 4.127 0 01.994-8.13 4.126 4.126 0 013.841 2.619 7.435 7.435 0 012.454-.414 7.41 7.41 0 013.68.972V6.445a2.25 2.25 0 00-2.25-2.25h-2.99L14.7 1.95z" />
      <Path d="M11.688 14.31a7.479 7.479 0 012.353-2.678 2.12 2.12 0 10-2.353 2.679zM19.227 12.48h-1.82L17.17 13.9a3.973 3.973 0 00-1.53.867l-1.428-.49-.904 1.512 1.142.977a3.985 3.985 0 00.002 1.899l-1.152.983.944 1.522 1.41-.502a3.97 3.97 0 001.543.862l.21 1.432h1.817l.21-1.432a3.973 3.973 0 001.544-.862l1.41.502.944-1.522-1.153-.983a3.987 3.987 0 00.002-1.899l1.142-.977-.904-1.511-1.428.489a3.974 3.974 0 00-1.53-.866l-.235-1.423zm-1.275 2.78a2.504 2.504 0 01.74.002 2.474 2.474 0 011.928 1.534l.006.015a2.474 2.474 0 01-.008 1.823 2.477 2.477 0 01-1.954 1.532 2.517 2.517 0 01-.705-.001 2.474 2.474 0 01-2.12-2.453 2.473 2.473 0 012.092-2.448l.02-.003z" />
    </Svg>
  );
};
const CameraSettingsIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CameraSettingsIcon;