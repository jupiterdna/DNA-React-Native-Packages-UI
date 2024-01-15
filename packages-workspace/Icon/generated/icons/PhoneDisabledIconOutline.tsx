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
      <Path d="M14.446 16.615l5.906 5.907 1.061-1.061L2.483 2.53 1.422 3.59l11.96 11.96a17.754 17.754 0 01-2.503 1.803l-2.85-2.808a.75.75 0 00-.693-.197l-3.744.854a.75.75 0 00-.583.73v4.22a.75.75 0 00.728.75c1.595.046 4.333-.29 7.373-1.954l.015-.009a19.058 19.058 0 003.32-2.325zM9.489 18.09c-1.98.926-3.744 1.241-4.98 1.305v-2.862l2.76-.63 2.22 2.187zM19.064 10.89a19.028 19.028 0 01-2.173 3.229l-1.066-1.066a17.678 17.678 0 001.644-2.378l-2.803-2.639a.75.75 0 01-.22-.695l.788-3.887a.75.75 0 01.735-.601h4.271a.75.75 0 01.75.75c0 1.907-.457 4.51-1.914 7.264a1.028 1.028 0 01-.012.023zm-.882-1.604c.835-1.84 1.19-3.554 1.283-4.933h-2.883l-.584 2.877 2.184 2.056z" />
    </Svg>
  );
};
const PhoneDisabledIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PhoneDisabledIconOutline;
