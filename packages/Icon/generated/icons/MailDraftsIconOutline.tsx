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
      <Path d="M20.883 6.422l-8.88-5.179-8.886 5.179A2.25 2.25 0 002 8.366l.002 10.474a2.25 2.25 0 002.25 2.25h15.5a2.25 2.25 0 002.25-2.25L22 8.365c0-.8-.425-1.54-1.117-1.943zM3.873 7.718l8.13-4.738 8.125 4.738a.75.75 0 01.334.411l-8.454 5.027L3.54 8.122a.75.75 0 01.331-.404zM3.5 9.843l8.508 5.058 8.492-5.05.003 8.989a.75.75 0 01-.75.75h-15.5a.75.75 0 01-.75-.75L3.5 9.843z" />
    </Svg>
  );
};
const MailDraftsIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MailDraftsIconOutline;
