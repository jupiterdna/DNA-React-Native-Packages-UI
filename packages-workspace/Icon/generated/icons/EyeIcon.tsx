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
      <Path d="M9.018 11.502c0-1.622 1.327-2.947 2.978-2.947 1.651 0 2.979 1.325 2.979 2.947 0 1.621-1.328 2.946-2.979 2.946s-2.978-1.325-2.978-2.946z" />
      <Path d="M5.033 6.355c2-1.373 4.27-2.215 6.963-2.215 2.693 0 4.963.842 6.963 2.215.948.65 1.803 1.558 2.477 2.436.673.876 1.2 1.77 1.47 2.426l.117.285-.117.284c-.27.656-.797 1.55-1.47 2.426-.674.878-1.53 1.787-2.477 2.437-2 1.372-4.27 2.214-6.963 2.214-2.692 0-4.962-.842-6.963-2.214-.947-.65-1.803-1.559-2.477-2.437-.672-.876-1.2-1.77-1.47-2.425l-.116-.285.117-.285c.269-.655.797-1.55 1.47-2.426.673-.878 1.53-1.786 2.476-2.436zm6.963.7c-2.467 0-4.478 1.985-4.478 4.447 0 2.461 2.01 4.446 4.478 4.446 2.467 0 4.478-1.985 4.478-4.446 0-2.462-2.01-4.447-4.478-4.447z" />
    </Svg>
  );
};
const EyeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default EyeIcon;
