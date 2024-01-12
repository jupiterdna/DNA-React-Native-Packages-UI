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
      <Path d="M21.373 23.083L16.32 18.03c-1.184 1.344-2.413 2.476-3.179 3.182-.272.25-.486.448-.619.582l-.532.535-.532-.535c-.133-.134-.345-.33-.614-.578-.857-.79-2.293-2.115-3.599-3.677-1.717-2.053-3.408-4.731-3.408-7.538A7.85 7.85 0 014.7 6.41L1.16 2.87l1.06-1.06 20.214 20.211-1.061 1.061zM20.157 10c0 1.836-.725 3.617-1.707 5.203l-4.476-4.476a2.076 2.076 0 00-2.612-2.612L6.953 3.707a8.297 8.297 0 015.19-1.714c4.436.07 8.014 3.616 8.014 8.008z" />
    </Svg>
  );
};
const LocationOffIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationOffIcon;
