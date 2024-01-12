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
      <Path d="M18.918 3.167a2.25 2.25 0 00-3.182 0l-1.21 1.21 4.735 4.734 1.21-1.21a2.25 2.25 0 000-3.181l-1.553-1.553zm-2.121 1.061a.75.75 0 011.06 0L19.41 5.78a.75.75 0 010 1.061l-.149.149-2.613-2.613.149-.149zM18.215 10.193L13.473 5.45l-11.3 11.3v4.741h4.743l11.3-11.298zM3.674 17.37l9.799-9.8 2.621 2.621-9.8 9.8h-2.62V17.37zM21.825 21.485H9.033l2-2h10.792v2z" />
    </Svg>
  );
};
const PencilRenameIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PencilRenameIconOutline;
