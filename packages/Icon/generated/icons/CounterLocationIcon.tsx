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
      <Path d="M8.933 3a2.716 2.716 0 100 5.432 2.716 2.716 0 000-5.432zM15.28 17.396c0-2.076 1.767-3.688 3.858-3.688h.128l.007.003c2.034.067 3.717 1.656 3.717 3.685 0 1.312-.81 2.504-1.541 3.348-.572.659-1.228 1.242-1.578 1.553-.1.089-.175.155-.216.196l-.523.508-.523-.508c-.041-.04-.116-.107-.215-.195-.35-.312-1.005-.894-1.576-1.554-.732-.845-1.539-2.037-1.539-3.348zm2.765.037c0 .62.512 1.078 1.089 1.078.576 0 1.088-.458 1.088-1.078 0-.619-.512-1.077-1.088-1.077-.577 0-1.09.458-1.09 1.077z" />
      <Path d="M1.5 12.502v1.5h.998v8H15.93c-.082-.09-.165-.183-.246-.277-.773-.892-1.905-2.443-1.905-4.329 0-2.342 1.552-4.2 3.588-4.894H1.5zM8.727 9.035c-1.2.025-2.332.267-3.2.642-.457.197-.875.445-1.19.746-.224.215-.434.493-.532.829h10.254c-.099-.336-.309-.614-.533-.829-.315-.3-.732-.549-1.189-.746-.917-.396-2.129-.644-3.405-.644l-.205.002z" />
    </Svg>
  );
};
const CounterLocationIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CounterLocationIcon;
