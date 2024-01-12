//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const FileClockIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M4 4.245a2.25 2.25 0 012.25-2.25h7.66L20 8.094v3.542a6.25 6.25 0 00-6.818 10.36H6.25A2.25 2.25 0 014 19.745v-15.5zm9.611-.427V8.38h4.555l-4.555-4.562z" />
      <Path d="M12.5 17.25a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zm4.016-2.072v2.389l1.87 1.87 1.06-1.061-1.43-1.43v-1.768h-1.5z" />
    </Svg>
  );
};
export default FileClockIcon;
