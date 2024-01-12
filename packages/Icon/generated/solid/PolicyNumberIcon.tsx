//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PolicyNumberIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M6.148 9.98c.08 1.551.477 2.57.978 3.303.484.708 1.09 1.19 1.732 1.64.64-.45 1.248-.932 1.732-1.64.501-.733.897-1.752.978-3.303-.965-.07-1.896-.285-2.71-.86-.814.575-1.745.79-2.71.86z" />
      <Path d="M4.25 4.575A2.25 2.25 0 002 6.825v10.35a2.25 2.25 0 002.25 2.25h15.5a2.25 2.25 0 002.25-2.25V6.825a2.25 2.25 0 00-2.25-2.25H4.25zm4.608 2.89l.424.392c.729.675 1.67.878 2.937.9l.614.012v.614c0 2.095-.48 3.537-1.211 4.606-.717 1.048-1.643 1.683-2.4 2.203l-.364.25-.365-.25c-.757-.52-1.682-1.155-2.4-2.204-.73-1.068-1.21-2.51-1.21-4.605v-.614l.613-.011c1.267-.023 2.209-.226 2.937-.9l.425-.393zm5.958 3.2v-1.5h4.3v1.5h-4.3zm0 2.865v-1.5h4.3v1.5h-4.3z" />
    </Svg>
  );
};
export default PolicyNumberIcon;
