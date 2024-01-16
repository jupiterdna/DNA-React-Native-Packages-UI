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
      <Path d="M6.25 3.495a.75.75 0 00-.75.75v15.5c0 .414.336.75.75.75h5.657a6.282 6.282 0 001.275 1.5H6.25A2.25 2.25 0 014 19.745v-15.5a2.25 2.25 0 012.25-2.25h7.66L20 8.094v3.542a6.208 6.208 0 00-1.5-.511V9.88h-6.389V3.495H6.25zm7.361.323V8.38h4.555l-4.555-4.562z" />
      <Path d="M16.516 15.178h1.5v1.767l1.43 1.43-1.06 1.062-1.87-1.87v-2.39z" />
      <Path d="M12.5 17.25a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zM17.25 14a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
    </Svg>
  );
};
const FileClockIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileClockIconOutline;
