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
      <Path d="M2.023 22V6.486H6.51V2h10.982v9.019h4.486V22h-8.552v-4.486h-2.897V22H2.023zm2.01-2.01h2.476v-2.476H4.033v2.477zm0-4.485h2.476v-2.477H4.033v2.477zm0-4.533h2.476V8.495H4.033v2.477zm4.486 4.533h2.476v-2.477H8.52v2.477zm0-4.533h2.476V8.495H8.52v2.477zm0-4.486h2.476V4.009H8.52v2.477zm4.486 9.019h2.476v-2.477h-2.476v2.477zm0-4.533h2.476V8.495h-2.476v2.477zm0-4.486h2.476V4.009h-2.476v2.477zm4.486 13.505h2.476v-2.477h-2.476v2.477zm0-4.486h2.476v-2.477h-2.476v2.477z" />
    </Svg>
  );
};
const UnitIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UnitIcon;
