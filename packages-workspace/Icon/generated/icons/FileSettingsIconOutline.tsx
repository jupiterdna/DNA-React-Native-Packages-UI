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
      <Path d="M6.25 3.495a.75.75 0 00-.75.75v15.5c0 .414.336.75.75.75h4.084l.87 1.5H6.25A2.25 2.25 0 014 19.745v-15.5a2.25 2.25 0 012.25-2.25h7.66L20 8.094V11h-1.5V9.88h-6.389V3.495H6.25zm7.361.323V8.38h4.555l-4.555-4.562z" />
      <Path d="M18.297 13h-2.595l-.215 1.575c-.253.11-.491.248-.711.409l-1.479-.602L12 16.618l1.263.973a3.754 3.754 0 000 .818L12 19.382l1.298 2.236 1.478-.602c.22.16.458.298.711.41L15.702 23h2.595l.216-1.575c.252-.111.49-.249.71-.41l1.48.603L22 19.382l-1.264-.974a3.77 3.77 0 000-.816L22 16.618l-1.297-2.236-1.48.602a3.76 3.76 0 00-.71-.409L18.297 13zM17 16.316c.935 0 1.693.754 1.693 1.684 0 .93-.758 1.684-1.693 1.684A1.688 1.688 0 0115.307 18c0-.93.757-1.684 1.692-1.684z" />
    </Svg>
  );
};
const FileSettingsIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FileSettingsIconOutline;
