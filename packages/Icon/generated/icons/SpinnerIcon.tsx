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
      <Path d="M14.738 2.043a1.255 1.255 0 00-.953.125 1.256 1.256 0 001.256 2.174 1.255 1.255 0 00-.303-2.3zM7.648 3.358a.836.836 0 11.837 1.448.836.836 0 01-.837-1.448zM4.04 8.824a.418.418 0 11.418.725.418.418 0 01-.418-.725zM5.222 12.173a3.346 3.346 0 10-.438 6.678 3.346 3.346 0 00.438-6.678zM16.597 16.071a2.51 2.51 0 10-.328 5.01 2.51 2.51 0 00.328-5.01z" />
      <Path d="M7.44 19.687a2.65 2.65 0 01.073-1.04 2.709 2.709 0 013.296-1.903 2.65 2.65 0 011.886 3.266 2.713 2.713 0 01-3.296 1.903 2.65 2.65 0 01-1.959-2.226zM18.661 5.694a1.674 1.674 0 111.674 2.9 1.674 1.674 0 01-1.674-2.9zM20.386 11.385a2.092 2.092 0 10-.274 4.175 2.092 2.092 0 00.274-4.175z" />
    </Svg>
  );
};
const SpinnerIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SpinnerIcon;
