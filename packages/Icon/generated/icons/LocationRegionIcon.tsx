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
      <Path d="M3.84 9.84c0-4.438 3.672-8.01 8.168-8.01h.132l.006.003c4.436.07 8.013 3.616 8.013 8.008 0 2.808-1.695 5.486-3.415 7.539-1.306 1.558-2.742 2.882-3.6 3.672-.272.25-.486.448-.619.582l-.532.535-.532-.535c-.133-.134-.345-.33-.615-.579-.856-.79-2.292-2.114-3.598-3.676C5.53 15.326 3.84 12.648 3.84 9.841zm6.084.092a2.076 2.076 0 104.152 0 2.076 2.076 0 00-4.152 0zM16.4 6.087l-.494-.565-1.13.988.495.564a4.324 4.324 0 011.072 2.858c0 1.28-.553 2.43-1.436 3.227l-.557.502 1.004 1.114.557-.502a5.831 5.831 0 001.932-4.34A5.824 5.824 0 0016.4 6.086zm-7.672.987l.493-.564-1.13-.988-.493.565a5.824 5.824 0 00-1.443 3.845 5.83 5.83 0 001.932 4.34l.557.503 1.004-1.114-.557-.502a4.331 4.331 0 01-1.436-3.227c0-1.095.404-2.093 1.073-2.858z" />
    </Svg>
  );
};
const LocationRegionIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationRegionIcon;
