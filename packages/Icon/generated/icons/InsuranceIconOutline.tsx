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
      <Path d="M11.198 8.14v2.75h-2.75v1.5h2.75v2.75h1.5v-2.75h2.75v-1.5h-2.75V8.14h-1.5z" />
      <Path d="M12.51 2.453L12 1.98l-.51.472c-2.038 1.887-4.638 2.4-7.856 2.46l-.737.014v.736c0 5.094 1.166 8.522 2.879 11.027 1.7 2.487 3.9 3.998 5.8 5.301l.424.291.424-.29c1.9-1.304 4.1-2.815 5.8-5.302 1.713-2.505 2.878-5.933 2.878-11.027v-.736l-.736-.014c-3.218-.06-5.818-.573-7.857-2.46zm-5.496 13.39C5.58 13.745 4.51 10.83 4.406 6.39 7.224 6.272 9.829 5.74 12 3.994c2.171 1.746 4.776 2.278 7.594 2.396-.105 4.439-1.174 7.355-2.608 9.453-1.41 2.064-3.21 3.393-4.986 4.62-1.777-1.227-3.576-2.556-4.986-4.62z" />
    </Svg>
  );
};
const InsuranceIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default InsuranceIconOutline;
