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
      <Path d="M19.646 7.13c.332.873.513 1.82.513 2.808 0 2.808-1.695 5.486-3.415 7.54-1.306 1.558-2.742 2.881-3.6 3.671-.272.251-.486.448-.619.582l-.532.536-.532-.536c-.133-.133-.345-.33-.615-.578-.856-.79-2.292-2.115-3.598-3.676C5.53 15.423 3.84 12.745 3.84 9.938c0-4.439 3.672-8.01 8.168-8.01h.132l.006.003a8.293 8.293 0 012.143.315L8.643 7.892v5.12h5.12l5.883-5.882zM19.368.55c.25.036.475.158.644.328l.756.756c.17.169.292.393.327.644a.973.973 0 01-.268.83l-.79.79-2.29-2.29.79-.79a.974.974 0 01.83-.268z" />
      <Path d="M19.322 4.626l-2.293-2.292-6.386 6.386v2.293h2.292l6.387-6.387z" />
    </Svg>
  );
};
const LocationEditIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationEditIcon;
