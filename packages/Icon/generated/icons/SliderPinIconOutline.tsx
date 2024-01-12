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
      <Path d="M12 20.01c-2.127-1.9-3.705-3.639-4.77-5.213-1.225-1.81-1.73-3.331-1.73-4.597 0-2.147.674-3.715 1.93-4.872C8.77 4.09 10.273 3.5 12 3.5c1.726 0 3.229.59 4.57 1.828 1.256 1.157 1.93 2.725 1.93 4.872 0 1.266-.505 2.787-1.73 4.597-1.065 1.574-2.643 3.313-4.77 5.213zm-6.013-4.373C7.313 17.596 9.317 19.718 12 22c2.683-2.283 4.688-4.404 6.012-6.363C19.337 13.68 20 11.867 20 10.2c0-2.5-.804-4.492-2.413-5.975C15.98 2.742 14.117 2 12 2c-2.117 0-3.98.742-5.588 2.225S4 7.7 4 10.2c0 1.667.662 3.48 1.987 5.438z" />
    </Svg>
  );
};
const SliderPinIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SliderPinIconOutline;
