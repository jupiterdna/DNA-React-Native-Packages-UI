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
      <Path d="M19.368.546c.25.036.475.158.644.327l.756.756c.17.17.292.394.327.645a.973.973 0 01-.268.83l-.79.79-2.29-2.29.79-.79a.974.974 0 01.83-.268zM19.646 7.126c.332.873.513 1.82.513 2.808 0 2.808-1.695 5.486-3.415 7.54-1.306 1.557-2.742 2.881-3.6 3.671-.272.251-.486.448-.619.582l-.532.536-.532-.536c-.133-.134-.345-.33-.615-.578-.856-.79-2.292-2.115-3.598-3.676C5.53 15.419 3.84 12.74 3.84 9.934c0-4.439 3.672-8.01 8.168-8.01h.132l.006.002a8.293 8.293 0 012.143.316L13.029 3.5a6.884 6.884 0 00-1.018-.076h-.132c-3.638.067-6.54 2.97-6.54 6.509 0 2.25 1.387 4.576 3.06 6.576 1.231 1.473 2.51 2.652 3.375 3.452l.003.002.216.2.226-.209c.867-.799 2.144-1.975 3.375-3.445 1.676-2 3.065-4.326 3.065-6.576 0-.557-.071-1.098-.206-1.615l1.193-1.193z" />
      <Path d="M19.322 4.622L17.029 2.33l-6.386 6.386v2.293h2.292l6.387-6.387zm-7.18 4.716L17.03 4.45l.172.171-4.887 4.887h-.171v-.171z" />
    </Svg>
  );
};
const LocationEditIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationEditIconOutline;
