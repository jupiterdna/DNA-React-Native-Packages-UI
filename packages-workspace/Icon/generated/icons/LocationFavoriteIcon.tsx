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
      <Path d="M3.84 9.84c0-4.439 3.672-8.01 8.168-8.01h.132l.006.002c4.436.07 8.013 3.616 8.013 8.008 0 2.808-1.695 5.486-3.415 7.54-1.306 1.557-2.742 2.881-3.6 3.671-.272.251-.486.448-.619.582l-.532.536-.532-.536c-.133-.133-.345-.33-.615-.578-.856-.79-2.292-2.115-3.598-3.676-1.717-2.054-3.408-4.732-3.408-7.54zm9.185-1.488L12 5.936l-1.026 2.416-2.615.23 1.981 1.722-.59 2.558L12 11.51l2.25 1.352-.59-2.558 1.981-1.722-2.615-.23z" />
    </Svg>
  );
};
const LocationFavoriteIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationFavoriteIcon;
