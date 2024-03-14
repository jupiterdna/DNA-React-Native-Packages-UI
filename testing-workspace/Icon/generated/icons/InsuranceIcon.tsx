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
      <Path d="M12 1.981l.51.472c2.038 1.887 4.638 2.4 7.856 2.46l.736.014v.736c0 5.094-1.165 8.522-2.878 11.027-1.7 2.487-3.9 3.998-5.8 5.301l-.424.291-.425-.29c-1.898-1.304-4.099-2.815-5.8-5.302-1.712-2.505-2.878-5.933-2.878-11.027v-.736l.737-.014c3.218-.06 5.818-.573 7.857-2.46L12 1.98zm-.802 8.908h-2.75v1.5h2.75v2.75h1.5v-2.75h2.75v-1.5h-2.75V8.14h-1.5v2.75z" />
    </Svg>
  );
};
const InsuranceIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default InsuranceIcon;
