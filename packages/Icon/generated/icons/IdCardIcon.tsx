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
      <Path d="M4.25 4.575A2.25 2.25 0 002 6.825v10.35a2.25 2.25 0 002.25 2.25h15.5a2.25 2.25 0 002.25-2.25V6.825a2.25 2.25 0 00-2.25-2.25H4.25zm4.698 7.415c-.439 0-.806-.148-1.102-.444a1.496 1.496 0 01-.444-1.102c0-.438.148-.806.444-1.102a1.496 1.496 0 011.102-.444c.438 0 .805.148 1.102.444.296.296.444.664.444 1.102 0 .438-.148.806-.444 1.102a1.496 1.496 0 01-1.102.444zm-3.096 3.112v-.446c0-.307.087-.59.263-.848a1.55 1.55 0 01.69-.568 6.36 6.36 0 011.106-.36c.36-.08.706-.12 1.037-.12.33 0 .676.04 1.036.12.36.08.73.2 1.106.36.285.12.515.31.69.568.176.258.264.54.264.848v.446H5.852zm12.497-4.434h-4.3v-1.5h4.3v1.5zm0 2.865h-4.3v-1.5h4.3v1.5z" />
    </Svg>
  );
};
const IdCardIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default IdCardIcon;
