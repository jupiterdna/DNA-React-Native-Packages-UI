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
      <Path d="M7.025 5.817a.75.75 0 01.375-.65l4.225-2.445a.75.75 0 01.751 0l4.225 2.445a.75.75 0 01.37.737v4.438l3.855 2.232a.75.75 0 01.37.736v4.882a.75.75 0 01-.376.65L16.6 21.278a.751.751 0 01-.75 0l-3.85-2.223-3.85 2.223a.75.75 0 01-.75 0L3.177 18.84a.75.75 0 01-.375-.65v-4.926a.75.75 0 01.373-.691l3.852-2.23V5.859a.757.757 0 01-.002-.041zm.749 8.977l2.723-1.572-2.727-1.574-2.72 1.574 2.724 1.572zm.75 1.303v3.233l2.722-1.571v-3.234l-2.722 1.572zm-4.222-1.574v3.236l2.722 1.571v-3.235l-2.722-1.572zm4.225-4.178l2.722 1.576V8.689L8.527 7.117v3.228zm6.944.002V7.12L12.747 8.69v3.232l2.723-1.575zm-.746-4.533L12 4.238 9.274 5.815 12 7.388l2.726-1.574zm1.498 8.98l2.726-1.573-2.72-1.575-2.729 1.576 2.723 1.572zm.75 1.303v3.233l2.722-1.571v-3.234l-2.722 1.572zm-4.222-1.574v3.236l2.722 1.571v-3.235l-2.722-1.572z" />
    </Svg>
  );
};
const ModelIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ModelIcon;
