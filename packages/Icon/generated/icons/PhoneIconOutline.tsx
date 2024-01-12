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
      <Path d="M2.978 3.635a.75.75 0 01.75-.75h4.27a.75.75 0 01.735.601l.79 3.888a.75.75 0 01-.221.695l-2.803 2.639a18.387 18.387 0 002.965 3.837 18.4 18.4 0 003.624 2.841l2.85-2.807a.75.75 0 01.693-.197l3.744.853a.75.75 0 01.584.732v4.22a.75.75 0 01-.729.749c-1.595.046-4.332-.291-7.372-1.955a.737.737 0 01-.016-.008c-1.441-.79-2.95-1.88-4.438-3.367-1.545-1.545-2.68-3.138-3.5-4.683a.731.731 0 01-.012-.023C3.435 8.145 2.978 5.543 2.978 3.636zM5.786 9.32L7.97 7.263l-.585-2.877H4.503c.093 1.379.448 3.093 1.283 4.933zm8.693 8.803c1.98.925 3.743 1.241 4.98 1.305v-2.862l-2.76-.63-2.22 2.187z" />
    </Svg>
  );
};
const PhoneIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PhoneIconOutline;
