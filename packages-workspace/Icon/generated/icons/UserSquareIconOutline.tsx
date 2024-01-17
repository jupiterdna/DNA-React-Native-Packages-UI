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
      <Path d="M8.25 10.12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM12 7.87a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
      <Path d="M2.85 5.6A2.75 2.75 0 015.6 2.85h12.8a2.75 2.75 0 012.75 2.75v12.8a2.75 2.75 0 01-2.75 2.75H5.6a2.75 2.75 0 01-2.75-2.75V5.6zM5.6 4.35c-.69 0-1.25.56-1.25 1.25v12.8l.002.066c1.956-2.198 4.649-3.579 7.647-3.579 3 0 5.693 1.381 7.649 3.58l.001-.068V5.601c0-.69-.56-1.25-1.25-1.25H5.601zm13.064 15.271c-1.72-2.015-4.084-3.234-6.665-3.234-2.58 0-4.944 1.22-6.664 3.234.085.019.174.028.266.028h12.798c.091 0 .18-.01.265-.028z" />
    </Svg>
  );
};
const UserSquareIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserSquareIconOutline;
