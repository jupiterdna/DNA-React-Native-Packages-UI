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
      <Path d="M9 8.963a2.999 2.999 0 115.998 0 2.999 2.999 0 01-5.998 0zM6.1 15.572v2.464h11.8v-2.464c0-.489-.265-.904-.6-1.224-.34-.324-.802-.603-1.33-.83-1.056-.456-2.471-.749-3.97-.749-1.5 0-2.914.293-3.972.749-.527.227-.99.506-1.328.83-.335.32-.6.735-.6 1.224zM20.599 10.9a2 2 0 10-4 0 2 2 0 004 0zM19.253 18.036v-2.464c0-.767-.3-1.387-.652-1.85 1.012.043 1.955.271 2.679.607.402.187.754.416 1.013.681.255.263.457.604.457 1.005v2.021h-3.497zM5.401 8.9a2 2 0 100 4 2 2 0 000-4zM4.747 15.572v2.464H1.25v-2.021c0-.401.202-.742.457-1.005.259-.265.611-.494 1.013-.68.724-.337 1.667-.565 2.68-.607-.353.462-.653 1.082-.653 1.849z" />
    </Svg>
  );
};
const GroupsIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default GroupsIcon;