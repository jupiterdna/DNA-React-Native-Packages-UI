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
      <Path d="M6.217 5.716a2.716 2.716 0 115.432 0 2.716 2.716 0 01-5.432 0zM8.933 4.5a1.216 1.216 0 100 2.432 1.216 1.216 0 000-2.432zM21.498 14.002H22.5v-1.5h-8.383v-.845c0-.52-.282-.938-.59-1.234-.316-.3-.733-.549-1.19-.746-.917-.396-2.129-.644-3.405-.644l-.205.002c-1.2.025-2.332.267-3.2.642-.457.197-.875.445-1.19.746-.31.296-.59.714-.59 1.234v.845H1.5v1.5h.998v8h19v-8zm-1.5 6.5h-16v-6.5h16v6.5zM5.246 11.67a.491.491 0 01.127-.162c.146-.139.392-.3.748-.454.706-.305 1.712-.521 2.811-.521 1.098 0 2.104.216 2.81.521.356.154.603.315.748.454a.491.491 0 01.127.162v.832h-7.37v-.832z" />
    </Svg>
  );
};
const CounterIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CounterIconOutline;
