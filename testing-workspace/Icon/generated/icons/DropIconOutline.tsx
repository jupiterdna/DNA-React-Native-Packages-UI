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
      <Path d="M11.839 3.09a.95.95 0 011.228 0c2.051 1.74 3.76 3.522 4.961 5.314 1.2 1.79 1.922 3.63 1.922 5.47 0 4.21-3.367 7.412-7.491 7.443h-.012c-4.124-.031-7.49-3.232-7.49-7.443 0-1.84.72-3.68 1.92-5.47C8.08 6.612 9.787 4.829 11.84 3.09zM8.123 9.24c-1.099 1.639-1.667 3.19-1.667 4.634 0 3.348 2.661 5.915 5.997 5.943 3.336-.028 5.997-2.595 5.997-5.943 0-1.443-.568-2.995-1.668-4.635-1.031-1.538-2.506-3.116-4.33-4.7-1.822 1.584-3.297 3.162-4.329 4.7z" />
      <Path d="M8.36 13.91a.75.75 0 01.836.652l.005.039a2.994 2.994 0 003.338 2.603.75.75 0 11.184 1.489 4.493 4.493 0 01-5.01-3.909l-.005-.038a.75.75 0 01.652-.836z" />
    </Svg>
  );
};
const DropIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DropIconOutline;
