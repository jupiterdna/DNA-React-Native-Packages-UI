//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PaymentMethodIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M9.363 10.765H4.248a2.25 2.25 0 00-2.25 2.25v.81h7.365v-3.06zM16.182 13a1 1 0 100-2 1 1 0 000 2z" />
      <Path d="M10.363 19.518a2.25 2.25 0 002.25 2.25h7.139a2.25 2.25 0 002.25-2.25V4.482a2.25 2.25 0 00-2.25-2.25h-7.139a2.25 2.25 0 00-2.25 2.22V19.519zm8.754-15.375a1 1 0 001.385.923v1.547a2.5 2.5 0 01-2.851-2.88h1.554a.996.996 0 00-.088.41zm1.385 14.824a1 1 0 00-1.311 1.3h-1.546a2.5 2.5 0 012.857-2.848v1.548zm-7.333 1.301a1 1 0 00-1.305-1.303v-1.546a2.5 2.5 0 012.85 2.849h-1.546zm-1.306-15.2a1 1 0 001.291-1.336h1.555a2.5 2.5 0 01-2.845 2.882V5.068zM13.682 12a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM9.363 15.826H1.998v3.691a2.25 2.25 0 002.25 2.25h6.02a3.239 3.239 0 01-.905-2.25v-3.691zm-4.96 3.313v-1h2.779v1h-2.78z" />
    </Svg>
  );
};
export default PaymentMethodIcon;
