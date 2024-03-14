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
      <Path d="M11.632 2.096a.75.75 0 01.735 0l8.223 4.625a.75.75 0 01.382.654v9.25a.75.75 0 01-.383.654l-8.222 4.625a.75.75 0 01-.735 0L3.41 17.279a.75.75 0 01-.383-.654v-9.25a.75.75 0 01.383-.654l8.222-4.625zM4.527 8.657v7.53l6.723 3.78V12.44L4.527 8.657zm8.223 11.31l6.722-3.78v-7.53L12.75 12.44v7.529zM12 11.14l2.63-1.48-6.692-3.765-2.63 1.48L12 11.139zM9.468 5.034l6.692 3.764 2.532-1.424L12 3.611 9.468 5.035z" />
    </Svg>
  );
};
const PackageIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PackageIconOutline;
