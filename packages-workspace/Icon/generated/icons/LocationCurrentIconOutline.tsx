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
      <Path d="M12.008 7.77a4.216 4.216 0 100 8.432 4.216 4.216 0 000-8.432zm-2.716 4.216a2.716 2.716 0 115.432 0 2.716 2.716 0 01-5.432 0z" />
      <Path d="M21.219 11.25a9.25 9.25 0 00-8.468-8.468V.734h-1.5v2.048a9.25 9.25 0 00-8.468 8.468H.734v1.5h2.049a9.25 9.25 0 008.468 8.468v2.048h1.5v-2.048a9.25 9.25 0 008.467-8.468h2.049v-1.5h-2.048zm-16.966.684a7.748 7.748 0 017.66-7.681h.176a7.748 7.748 0 017.659 7.66v.174a7.748 7.748 0 01-7.683 7.66h-.128a7.748 7.748 0 01-7.684-7.681v-.132z" />
    </Svg>
  );
};
const LocationCurrentIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationCurrentIconOutline;
