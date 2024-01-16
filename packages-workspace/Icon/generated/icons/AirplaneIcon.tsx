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
      <Path d="M11.999 1.603a1.905 1.905 0 00-1.905 1.905v5.187l-8.399 4.853v2.833l8.396-2.462v4.623l-1.904 1.521v2.334L12 21.323l3.812 1.074v-2.334l-1.904-1.52V13.92l8.396 2.461v-2.833l-8.399-4.853V3.508A1.905 1.905 0 0012 1.603z" />
    </Svg>
  );
};
const AirplaneIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AirplaneIcon;
