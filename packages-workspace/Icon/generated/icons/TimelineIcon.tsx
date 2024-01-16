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
      <Path d="M20.904 10.231a2.191 2.191 0 10-1.987-1.266l-3 3a2.182 2.182 0 00-1.02-.25c-.375 0-.728.093-1.036.259l-1.91-1.909a2.191 2.191 0 10-4.042.024l-3.885 3.886a2.191 2.191 0 101.06 1.062l3.851-3.853c.298.151.634.236.99.236.366 0 .71-.089 1.013-.247l1.922 1.922a2.191 2.191 0 104.066-.017l3.052-3.052c.281.132.595.205.926.205z" />
    </Svg>
  );
};
const TimelineIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TimelineIcon;
