//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const MoviePlayIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M4.055 3.158L5.949 6.96h2.799L6.849 3.148h2.303l1.898 3.813h2.8l-1.9-3.813h2.301l1.899 3.813h2.799L17.05 3.148h2.688a2.25 2.25 0 012.25 2.25v13.175a2.25 2.25 0 01-2.25 2.25H4.262a2.25 2.25 0 01-2.25-2.25V5.398a2.25 2.25 0 012.043-2.24zm10.726 10.93l-4.705-3.528v7.057l4.705-3.529z" />
    </Svg>
  );
};
export default MoviePlayIcon;
