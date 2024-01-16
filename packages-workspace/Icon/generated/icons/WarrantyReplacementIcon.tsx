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
      <Path d="M12.51 2.321l-.509-.471-.51.471c-2.038 1.887-4.638 2.4-7.856 2.46l-.737.014v.736c0 5.094 1.166 8.522 2.879 11.027 1.7 2.488 3.9 3.998 5.8 5.301l.424.291.424-.29c1.9-1.303 4.1-2.814 5.8-5.302 1.713-2.505 2.878-5.933 2.878-11.027v-.736l-.736-.014c-3.218-.06-5.818-.573-7.857-2.46zm-2.128 6.367l-.656-1.064a4.34 4.34 0 016.607 3.464l.53-.53.884.883-2.095 2.096-2.095-2.096.883-.883.647.646a3.09 3.09 0 00-4.705-2.516zm-.823 3.34l-.648-.65a3.09 3.09 0 004.707 2.575l.656 1.065a4.34 4.34 0 01-6.61-3.517l-.527.527-.884-.884 2.095-2.096 2.095 2.096-.884.884z" />
    </Svg>
  );
};
const WarrantyReplacementIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default WarrantyReplacementIcon;
