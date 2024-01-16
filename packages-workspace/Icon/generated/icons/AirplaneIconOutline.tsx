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
      <Path d="M11.999 3.103a.405.405 0 00-.405.405V9.56l-8.275 4.781 8.272-2.426v7.348l-1.19.951 1.598-.45 1.599.45-1.191-.95v-7.349l8.272 2.426-8.275-4.781V3.508A.405.405 0 0012 3.103zm-1.905.405a1.905 1.905 0 113.81 0v5.187l8.399 4.853v2.833l-8.396-2.462v4.623l1.904 1.521v2.334l-3.812-1.074-3.812 1.074v-2.334l1.904-1.52V13.92L1.695 16.38v-2.833l8.399-4.853V3.508z" />
    </Svg>
  );
};
const AirplaneIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AirplaneIconOutline;
