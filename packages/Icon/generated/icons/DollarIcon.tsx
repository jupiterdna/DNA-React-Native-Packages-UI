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
      <Path d="M12.784 3.01v2.054c1.105.19 2.127.763 2.825 1.573l.49.568-1.137.979-.49-.568c-1.036-1.203-3.04-1.582-4.412-.402-.9.969-.736 2.302.37 2.929.726.412 1.432.641 2.158.877l.275.09c.795.26 1.656.568 2.37 1.218.848.774 1.32 1.773 1.325 2.803.006 1.035-.463 2.027-1.352 2.765-.706.586-1.584.845-2.422.913v2.13h-1.5v-2.197c-.763-.127-1.472-.391-1.93-.754a6.395 6.395 0 01-1.396-1.546c-.17-.27-.313-.56-.465-.84l1.319-.715.356.656v.002l.01.017.048.078a4.898 4.898 0 001.059 1.172c.264.21.937.463 1.769.509h.512c.653-.038 1.253-.224 1.682-.58.569-.471.813-1.048.81-1.603-.002-.56-.259-1.175-.836-1.701-.452-.412-1.028-.64-1.827-.902l-.267-.087c-.719-.233-1.572-.509-2.438-1-2.065-1.172-2.21-3.703-.693-5.293l.023-.024.025-.022a4.398 4.398 0 012.239-1.06v-2.04h1.5z" />
    </Svg>
  );
};
const DollarIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DollarIcon;
