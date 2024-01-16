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
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.658 0 1.3-.064 1.923-.185-.389-.374-.82-.813-1.229-1.286-.537-.62-1.192-1.467-1.694-2.48v2.393A8.501 8.501 0 013.79 9.79L9 15v1a2 2 0 001.976 2c-.443-.909-.761-1.95-.761-3.081 0-1.063.249-2.049.687-2.919H8v-2h2a1 1 0 001-1V7h2a2 2 0 002-2v-.955a8.527 8.527 0 014.884 4.77 6.99 6.99 0 011.924 1.223C20.896 5.455 16.85 2 12 2z" />
      <Path d="M12.215 14.87c0-2.619 2.233-4.67 4.896-4.67l.135.003c2.607.066 4.753 2.094 4.753 4.666 0 1.654-1.025 3.184-1.994 4.302-.749.862-1.592 1.612-2.066 2.033-.141.126-.25.223-.313.284l-.523.508-.523-.508c-.063-.061-.17-.157-.31-.282-.474-.421-1.316-1.172-2.065-2.036-.968-1.118-1.99-2.648-1.99-4.3zm3.4.049c0 .834.693 1.466 1.492 1.466.798 0 1.491-.632 1.491-1.466s-.693-1.466-1.491-1.466c-.8 0-1.492.632-1.492 1.466z" />
    </Svg>
  );
};
const LocationRemoteIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationRemoteIcon;
