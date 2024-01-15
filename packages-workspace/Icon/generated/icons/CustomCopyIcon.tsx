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
      <Path d="M18.522 11.643c0 .49-.413.892-.918.892-.505 0-.918-.401-.918-.892V7.985H3.836v12.49h12.85v-2.774c0-.49.413-.892.918-.892.505 0 .918.401.918.892v2.784c0 .981-.817 1.775-1.827 1.775H3.827C2.817 22.26 2 21.466 2 20.485V5.3c0-.982.817-1.776 1.827-1.776h3.845a2.75 2.75 0 012.589-1.784 2.74 2.74 0 012.588 1.784h3.846c1.01 0 1.827.794 1.827 1.776v6.343zM5.672 6.058c0 .42.348.758.78.758h7.618c.431 0 .78-.339.78-.758a.769.769 0 00-.78-.758h-2.891v-.892c0-.491-.413-.893-.918-.893-.505 0-.918.402-.918.893V5.3H6.452a.769.769 0 00-.78.758zm9.647 4.274l-4.874 4.46 4.874 4.461V15.9H22v-2.454h-6.681v-3.113zm-3.81-1.17H6.185c-.507 0-.917.4-.917.893s.41.892.917.892h5.324c.507 0 .918-.4.918-.892a.905.905 0 00-.918-.892zm-5.324 2.633h2.038c.507 0 .918.4.918.892 0 .493-.411.892-.918.892H6.185a.905.905 0 01-.917-.892c0-.493.41-.892.917-.892zm3.59 5.674h-3.59c-.507 0-.917.4-.917.892 0 .493.41.892.917.892h3.59c.506 0 .917-.399.917-.892a.905.905 0 00-.918-.892zm-3.59-2.623H7.25c.507 0 .918.4.918.892 0 .493-.411.892-.918.892H6.185a.905.905 0 01-.917-.892c0-.493.41-.892.917-.892z" />
    </Svg>
  );
};
const CustomCopyIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CustomCopyIcon;