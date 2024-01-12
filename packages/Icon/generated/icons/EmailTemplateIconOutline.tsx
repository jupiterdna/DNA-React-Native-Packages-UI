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
      <Path d="M16.25 9.897h-8.5V8.434h8.5v1.463zM12.604 12.345H7.75v-1.462h4.854v1.462z" />
      <Path d="M12 1.709l4.067 3.04h2.027c.942 0 1.706.764 1.706 1.706V7.54l1.803 1.347c.554.414.88 1.066.88 1.758v9.995a2.194 2.194 0 01-2.193 2.194H3.71a2.194 2.194 0 01-2.194-2.194v-9.995c0-.692.326-1.344.88-1.758l1.805-1.348V6.455c0-.942.764-1.706 1.706-1.706h2.025L12 1.709zm-1.625 3.04h3.25L12 3.535l-1.625 1.214zM4.2 9.363l-.93.695a.731.731 0 00-.293.585v1.218l1.223.607V9.363zm1.462 3.83L12 16.34l6.338-3.146V6.455a.244.244 0 00-.244-.244H5.907a.244.244 0 00-.244.244v6.739zm14.137-.726l1.221-.605v-1.219a.731.731 0 00-.293-.585l-.928-.693v3.102zM2.978 20.64c0 .404.327.732.731.732h16.58a.731.731 0 00.732-.732v-7.145l-9.02 4.478-9.023-4.478v7.145z" />
    </Svg>
  );
};
const EmailTemplateIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default EmailTemplateIconOutline;
