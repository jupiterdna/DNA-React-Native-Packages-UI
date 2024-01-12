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
      <Path d="M3.285 20.476h13.396c.49 0 .892.392.892.883 0 .5-.401.901-.892.901H3.276A1.775 1.775 0 011.5 20.485V5.3c0-.982.794-1.776 1.776-1.776h3.74C7.39 2.49 8.363 1.74 9.532 1.74c1.17 0 2.151.75 2.517 1.784h3.74c.981 0 1.776.794 1.776 1.776v7.235c0 .491-.402.893-.893.893a.895.895 0 01-.892-.893v-4.55H3.285v12.49zM8.64 5.309H5.829a.758.758 0 100 1.516h7.407a.758.758 0 100-1.516h-2.811v-.892a.895.895 0 00-.893-.893.895.895 0 00-.892.893v.892zM5.57 9.163h7.747a.892.892 0 110 1.784H5.57a.892.892 0 110-1.784zm3.49 2.632H5.57a.892.892 0 100 1.784h3.49a.892.892 0 100-1.784zm-3.49 5.674h3.49a.892.892 0 110 1.784H5.57a.892.892 0 110-1.784zm1.892-2.623H5.57a.892.892 0 100 1.784h1.892a.892.892 0 100-1.784zm7.247 4.943L22.498 12l-1.204-1.294-6.587 6.585-3.275-3.275-1.267 1.232 4.543 4.54z" />
    </Svg>
  );
};
const CustomCopiedIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CustomCopiedIcon;
