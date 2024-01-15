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
      <Path d="M13.025 8.352L12 5.936l-1.026 2.416-2.615.23 1.981 1.722-.59 2.558L12 11.51l2.25 1.352-.59-2.558 1.981-1.722-2.615-.23z" />
      <Path d="M3.84 9.84c0-4.438 3.672-8.01 8.168-8.01h.132l.006.003c4.436.07 8.013 3.616 8.013 8.008 0 2.808-1.695 5.486-3.415 7.539-1.306 1.558-2.742 2.882-3.6 3.672-.272.25-.486.448-.619.582l-.532.535-.532-.535c-.133-.134-.345-.33-.615-.579-.856-.79-2.292-2.114-3.598-3.676C5.53 15.326 3.84 12.648 3.84 9.841zm8.039-6.508c-3.638.067-6.54 2.97-6.54 6.509 0 2.25 1.387 4.576 3.06 6.576 1.231 1.473 2.51 2.652 3.375 3.451l.003.003.216.2.226-.209c.867-.8 2.144-1.976 3.375-3.445 1.676-2 3.065-4.327 3.065-6.576 0-3.583-2.953-6.509-6.648-6.509h-.132z" />
    </Svg>
  );
};
const LocationFavoriteIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationFavoriteIconOutline;
