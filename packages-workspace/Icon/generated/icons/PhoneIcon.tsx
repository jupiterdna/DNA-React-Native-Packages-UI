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
      <Path d="M2.98 3.64a.75.75 0 01.75-.75h4.271a.75.75 0 01.735.6l.79 3.888a.75.75 0 01-.221.695l-2.803 2.64a18.387 18.387 0 002.965 3.836 18.405 18.405 0 003.624 2.842l2.85-2.808a.75.75 0 01.693-.197l3.744.854a.75.75 0 01.584.73v4.22a.75.75 0 01-.729.75c-1.595.047-4.332-.29-7.373-1.954l-.015-.009c-1.441-.79-2.95-1.88-4.438-3.367-1.545-1.545-2.68-3.138-3.5-4.683a.86.86 0 01-.012-.023C3.438 8.15 2.98 5.547 2.98 3.64z" />
    </Svg>
  );
};
const PhoneIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PhoneIcon;
