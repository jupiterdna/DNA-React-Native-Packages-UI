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
      <Path d="M10.34 2.096a.75.75 0 00-.735 0L1.382 6.721A.75.75 0 001 7.375v9.25c0 .271.146.52.382.654l8.223 4.625a.75.75 0 00.735 0l2.77-1.558a5.97 5.97 0 01-.61-1.378l-1.778 1v-7.53l6.722-3.78v2.646a6.065 6.065 0 011.5-.014V7.375a.75.75 0 00-.382-.654L10.34 2.096zM9.222 12.44v7.529L2.5 16.186V8.657l6.722 3.782zm3.38-2.78l-2.63 1.48L3.28 7.376l2.63-1.48 6.693 3.765zm1.53-.86L7.44 5.035 9.972 3.61l6.693 3.764-2.532 1.424zM17.514 15.178h1.5v1.767l1.43 1.43-1.06 1.062-1.87-1.87v-2.39z" />
      <Path d="M18.25 12.5a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM15 17.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z" />
    </Svg>
  );
};
const PackageClockIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PackageClockIconOutline;
