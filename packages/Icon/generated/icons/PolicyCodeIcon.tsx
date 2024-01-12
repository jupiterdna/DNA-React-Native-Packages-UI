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
      <Path d="M12.51 2.321l-.509-.471-.51.471c-2.038 1.887-4.638 2.4-7.856 2.46l-.737.014v.736c0 5.094 1.166 8.522 2.879 11.027 1.7 2.488 3.9 3.998 5.8 5.301l.424.291.424-.29c1.9-1.303 4.1-2.814 5.8-5.302 1.713-2.505 2.878-5.933 2.878-11.027v-.736l-.736-.014c-3.218-.06-5.818-.573-7.857-2.46zm-4.826 5.16h1.192v7.15H7.684v-7.15zm1.789 0h1.176v7.15H9.473v-7.15zm1.773 0h.596v7.15h-.596v-7.15zm1.494 0h1.193v7.15H12.74v-7.15zm1.79 0h1.788v7.15H14.53v-7.15z" />
    </Svg>
  );
};
const PolicyCodeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PolicyCodeIcon;
