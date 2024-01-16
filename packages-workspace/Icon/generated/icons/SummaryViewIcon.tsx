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
      <Path d="M3 5.25A2.25 2.25 0 015.25 3h10.829L21 7.97v4.215a6.216 6.216 0 00-8.808 8.767H5.25A2.25 2.25 0 013 18.702V5.25zm16.5 3.338L15.453 4.5h-.388v4.425H19.5v-.337zM9.059 7.904a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0zM7.934 13.1a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm1.125 2.947a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0z" />
      <Path d="M12.004 16.694a4.716 4.716 0 118.538 2.764l1.962 1.962-1.06 1.061-1.963-1.963a4.716 4.716 0 01-7.477-3.824zm4.716-3.216a3.216 3.216 0 100 6.432 3.216 3.216 0 000-6.433z" />
    </Svg>
  );
};
const SummaryViewIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SummaryViewIcon;
