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
      <Path d="M15.266 19.052h3.171V8.31h3.561l-6.31-6.31-6.311 6.31h3.56v1.27a7.8 7.8 0 011.5 1.503V6.809h-1.439l2.69-2.69 2.689 2.69h-1.44v10.743h-1.145a7.688 7.688 0 01-.526 1.5zM6.314 12.54a1.275 1.275 0 100 2.55 1.275 1.275 0 000-2.55zm.225 1.276a.225.225 0 11-.45 0 .225.225 0 01.45 0zM10.306 12.636l-5.171 5.171 1.06 1.06 5.172-5.17-1.06-1.061zM8.914 17.69a1.275 1.275 0 112.55 0 1.275 1.275 0 01-2.55 0zm1.275.225a.225.225 0 100-.45.225.225 0 000 .45z" />
      <Path d="M2.002 15.752a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0zm6.25-4.75a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5z" />
    </Svg>
  );
};
const RatesIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default RatesIconOutline;
