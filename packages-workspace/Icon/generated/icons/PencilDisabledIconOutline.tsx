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
      <Path d="M19.203 3.22a2.25 2.25 0 00-3.182 0l-1.209 1.21 4.734 4.734 1.21-1.21a2.25 2.25 0 000-3.181L19.203 3.22zm-2.121 1.061a.75.75 0 011.06 0l1.553 1.553a.75.75 0 010 1.06l-.149.149-2.613-2.613.149-.149zM18.5 10.246l-4.742-4.743-2.785 2.786 1.06 1.06 1.725-1.725 2.621 2.622-1.708 1.708 1.06 1.06 2.77-2.768zM8.505 10.757L2.142 4.393l1.06-1.06 17.43 17.43-1.06 1.06-6.325-6.324-6.046 6.046H2.46v-4.742l6.046-6.046zm3.681 3.681l-2.62-2.62-5.607 5.606v2.62h2.62l5.607-5.606z" />
    </Svg>
  );
};
const PencilDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PencilDisabledIconOutline;
