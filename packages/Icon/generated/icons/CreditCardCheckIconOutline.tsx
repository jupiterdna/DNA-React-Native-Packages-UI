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
      <Path d="M2 5.331a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 5.331v7.807a5.95 5.95 0 00-1.5-1.027v-2.28h-17v6.85c0 .415.336.75.75.75H12v.04c0 .503.063.993.181 1.46H4.25A2.25 2.25 0 012 16.681V5.331zm2.25-.75a.75.75 0 00-.75.75v2.5h17v-2.5a.75.75 0 00-.75-.75H4.25z" />
      <Path d="M4.75 15.581h3.977v-1.5H4.75v1.5zM16.994 20.919L22 15.912l-1.06-1.06-3.946 3.945-1.894-1.894-1.06 1.06 2.954 2.956z" />
    </Svg>
  );
};
const CreditCardCheckIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CreditCardCheckIconOutline;
