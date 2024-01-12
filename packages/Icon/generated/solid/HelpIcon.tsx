//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const HelpIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M11.615 5.5c-1.827 0-2.592 1.04-2.95 1.583l-.412.626L7 6.884l.413-.626C7.878 5.55 9.038 4 11.615 4c1.556 0 2.759.533 3.573 1.367a4.188 4.188 0 011.186 2.914c0 .938-.18 1.678-.569 2.356-.373.652-.917 1.202-1.542 1.79-1.291 1.218-1.829 1.78-1.829 2.827v.75h-1.5v-.75c0-1.752 1.048-2.738 2.221-3.843l.08-.075c.624-.588 1.017-1.006 1.269-1.445.236-.411.37-.884.37-1.61 0-.65-.247-1.34-.76-1.866-.502-.515-1.303-.915-2.5-.915zM10.585 19.013a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" />
    </Svg>
  );
};
export default HelpIcon;
