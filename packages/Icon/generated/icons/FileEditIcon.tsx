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
      <Path d="M19 8.098v1.434l-9.05 9.051L9.946 22H5.25A2.25 2.25 0 013 19.75V4.25A2.25 2.25 0 015.25 2h7.66L19 8.098zm-1.834.287l-4.555-4.562v4.562h4.555zM17.808 13.237a.75.75 0 011.06 0l1.912 1.912a.75.75 0 010 1.06l-1.234 1.235-2.97-2.974 1.232-1.233z" />
      <Path d="M15.514 15.53l2.971 2.975L14.99 22h-3.025v-2.92l3.55-3.55z" />
    </Svg>
  );
};
const FileEditIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileEditIcon;
