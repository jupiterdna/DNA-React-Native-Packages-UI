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
      <Path d="M10.848 15.716l6.047-6.047-1.06-1.061-4.987 4.987-2.682-2.683-1.06 1.061 3.742 3.743z" />
      <Path d="M3.96 9.387L1.431 12l2.527 2.613-.509 3.599 3.58.628 1.704 3.211L12 20.455l3.266 1.596 1.704-3.21 3.58-.629-.509-3.6L22.57 12 20.04 9.387l.51-3.599-3.581-.628-1.704-3.211L12 3.545 8.734 1.95l-1.703 3.21-3.58.629.508 3.6zm1.587 4.71L3.52 12l2.028-2.097-.409-2.888 2.874-.504 1.367-2.577L12 5.214l2.621-1.28 1.367 2.577 2.874.504-.409 2.888L20.482 12l-2.029 2.097.409 2.888-2.874.504-1.367 2.577-2.62-1.28-2.622 1.28-1.367-2.577-2.874-.504.41-2.888z" />
    </Svg>
  );
};
const CheckExceptionalIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CheckExceptionalIconOutline;
