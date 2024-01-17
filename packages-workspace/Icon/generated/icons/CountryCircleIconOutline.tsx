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
      <Path d="M14.338 6.73h-6.59v11.522h1.5V13.25h2.617l.997 1.992 5.397.023V8.76l-2.927-.02-.994-2.01zm-1.546 5.02H9.248V8.23h4.159l.991 2.002 2.36.017v3.51l-2.968-.013-.998-1.996z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM3.5 12a8.5 8.5 0 1017 0 8.5 8.5 0 00-17 0z" />
    </Svg>
  );
};
const CountryCircleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CountryCircleIconOutline;
