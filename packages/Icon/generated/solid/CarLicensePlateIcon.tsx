//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CarLicensePlateIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M1.5 6.817c0-.967.784-1.75 1.75-1.75h17.5c.966 0 1.75.783 1.75 1.75v10.366a1.75 1.75 0 01-1.75 1.75H3.25a1.75 1.75 0 01-1.75-1.75V6.817zm4.469 1.538a.982.982 0 101.963 0 .982.982 0 00-1.963 0zm11.08-.981a.982.982 0 100 1.963.982.982 0 000-1.963zm-6.897 4.556v.923h-2.08v3.422h3.372v-1.25H9.322v-.922h2.08V10.68H8.02v1.25h2.132zm2.19 0h2.09v.923h-2.09v1.25h2.09v.922h-2.09v1.25h3.34V10.68h-3.34v1.25zm5.426.93v-2.154h-1.25v3.404h2.4v2.138h1.25v-5.542h-1.25v2.154h-1.15zm-13.903-.93H4.87v3.095H3.865v1.25h3.26v-1.25H6.12V10.68H3.865v1.25z" />
    </Svg>
  );
};
export default CarLicensePlateIcon;
