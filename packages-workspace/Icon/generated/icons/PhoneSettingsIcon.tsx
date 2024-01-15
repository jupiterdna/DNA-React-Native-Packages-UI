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
      <Path d="M3.73 2.9a.75.75 0 00-.75.75c0 1.907.458 4.51 1.915 7.264a.731.731 0 00.012.023c.82 1.546 1.955 3.138 3.5 4.683 1.487 1.488 2.997 2.577 4.438 3.367l.015.009c3.04 1.663 5.778 2 7.373 1.954a.75.75 0 00.729-.75v-4.22a.75.75 0 00-.584-.73l-3.744-.854a.75.75 0 00-.693.197l-2.85 2.808a18.401 18.401 0 01-3.624-2.842 18.387 18.387 0 01-2.965-3.837l2.803-2.638a.75.75 0 00.22-.696l-.789-3.887a.75.75 0 00-.735-.601h-4.27z" />
      <Path d="M11.755 9.023a.875.875 0 100 1.75.875.875 0 000-1.75zM14.967 9.898a.875.875 0 111.75 0 .875.875 0 01-1.75 0zM19.953 9.023a.875.875 0 100 1.75.875.875 0 000-1.75z" />
    </Svg>
  );
};
const PhoneSettingsIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PhoneSettingsIcon;
