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
      <Path d="M11.223 11.193v1.43h-1.43v1.5h1.43v1.429h1.5v-1.43h1.43v-1.5h-1.43v-1.43h-1.5z" />
      <Path d="M12 8.126l.425.393c.97.898 2.217 1.157 3.837 1.187l.613.012v.613c0 2.632-.603 4.426-1.507 5.748-.892 1.305-2.044 2.096-3.007 2.756l-.361.248-.361-.248c-.963-.66-2.115-1.451-3.007-2.756-.904-1.322-1.507-3.116-1.507-5.748v-.613l.613-.012c1.62-.03 2.867-.289 3.837-1.187L12 8.126zm-3.613 2.806c.083 2.086.603 3.457 1.277 4.442.656.96 1.483 1.597 2.336 2.191.852-.594 1.68-1.232 2.336-2.191.674-.985 1.194-2.356 1.277-4.442-1.306-.078-2.547-.35-3.613-1.142-1.066.792-2.308 1.065-3.613 1.143z" />
      <Path d="M4 4.25A2.25 2.25 0 016.25 2h7.66L20 8.098V19.75A2.25 2.25 0 0117.75 22H6.25A2.25 2.25 0 014 19.75V4.25zm2.25-.75a.75.75 0 00-.75.75v15.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75V8.72L13.289 3.5H6.25z" />
    </Svg>
  );
};
const PolicyIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PolicyIconOutline;
