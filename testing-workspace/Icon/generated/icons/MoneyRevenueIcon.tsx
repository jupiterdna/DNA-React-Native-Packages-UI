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
      <Path d="M13.693 9.703a3.559 3.559 0 100-7.117 3.559 3.559 0 000 7.117zM5.652 11.337H1.447v10.954h4.205V11.337zM14.512 22.748L7.133 20.64v-9.304H9.46l6.501 2.482a2.25 2.25 0 011.448 2.102v.312h-3.012c-.766 0-1.903-.327-2.918-.695-.106-.039-.326-.125-.497-.192h-.001l-.179-.07-.404 1.29.203.08c.151.059.333.13.418.16 1.012.368 2.35.777 3.378.777h5.757c.923 0 1.425.145 1.865.43.384.248.536.66.536 1.441v.718l-8.042 2.576zM22.388 4.455l-2.947 1-.482-1.421 2.947-1 .482 1.42zM19.44 7l2.948 1-.482 1.42-2.947-1L19.441 7zM5 4.455l2.948 1 .482-1.421-2.948-1-.481 1.42zM7.948 7L5 8l.481 1.42 2.948-1L7.948 7z" />
    </Svg>
  );
};
const MoneyRevenueIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MoneyRevenueIcon;
