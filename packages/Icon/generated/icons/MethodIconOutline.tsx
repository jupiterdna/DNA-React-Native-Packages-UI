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
      <Path d="M1.723 4.448A2.726 2.726 0 115.26 7.05v4.199h5.99V7.07a2.727 2.727 0 111.5-.001v4.181h5.99V7.051a2.727 2.727 0 111.5.034v4.165h2.035v1.5h-5.779v4.18a2.727 2.727 0 01-.75 5.348 2.726 2.726 0 01-.75-5.348v-4.18H9.004v4.18a2.727 2.727 0 11-1.5.001V12.75H1.723v-1.5H3.76V7.086a2.727 2.727 0 01-2.037-2.638zm2.726-1.226a1.226 1.226 0 100 2.451 1.226 1.226 0 000-2.451zm3.806 15.104a1.226 1.226 0 100 2.452 1.226 1.226 0 000-2.452zm2.518-13.878a1.226 1.226 0 102.452 0 1.226 1.226 0 00-2.452 0zm4.972 13.878a1.226 1.226 0 100 2.452 1.226 1.226 0 000-2.452zm2.58-13.878a1.226 1.226 0 102.451 0 1.226 1.226 0 00-2.452 0z" />
    </Svg>
  );
};
const MethodIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MethodIconOutline;
