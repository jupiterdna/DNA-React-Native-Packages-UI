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
      <Path d="M1.92 6.38a2.25 2.25 0 012.25-2.25h15.5a2.25 2.25 0 012.25 2.25v4.575l-5.936 5.936-3.111-3.112-3.89 3.889 2.312 2.312H4.17a2.25 2.25 0 01-2.25-2.25V6.38zm10.007 4.856l-8.018-5.01-.122 1.693 8.14 5.086 8.132-5.081-.123-1.693-8.01 5.005z" />
      <Path d="M15.984 21.841l7.056-7.057-1.06-1.06-5.996 5.996-3.112-3.112-1.06 1.06 4.172 4.173z" />
    </Svg>
  );
};
const MailMarkReadIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MailMarkReadIcon;
