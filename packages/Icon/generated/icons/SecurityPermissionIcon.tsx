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
      <Path d="M14.558 2.002H9.394l-.428 3.15a7.471 7.471 0 00-1.415.817L4.61 4.766 2.027 9.237l2.514 1.946a7.555 7.555 0 000 1.635l-2.513 1.945 2.582 4.472 2.942-1.204c.437.321.911.596 1.414.818l.428 3.149h4.923a11.457 11.457 0 01-2.008-2.216c-.98-1.434-1.711-3.27-1.99-5.754a2.618 2.618 0 113.827-3.492c.872-.263 1.641-.675 2.32-1.302l.509-.472.51.472c.761.705 1.639 1.137 2.647 1.393l1.794-1.39-2.582-4.472L16.4 5.97a7.474 7.474 0 00-1.413-.818l-.429-3.15z" />
      <Path d="M19.637 14.958l-3.19 3.19-2.134-2.133 1.06-1.06 1.073 1.073 2.13-2.131 1.061 1.06z" />
      <Path d="M16.975 10.72l-.51.47c-.936.867-2.144 1.125-3.754 1.155l-.736.013v.736c0 2.652.608 4.473 1.528 5.82.905 1.323 2.074 2.125 3.035 2.784l.436.3.437-.3c.961-.66 2.13-1.461 3.035-2.785.92-1.346 1.529-3.167 1.529-5.819v-.736l-.737-.014c-1.61-.03-2.818-.287-3.754-1.153l-.51-.472zm-3.483 3.092c1.244-.086 2.441-.359 3.483-1.105 1.041.746 2.238 1.019 3.482 1.105-.097 1.998-.604 3.31-1.25 4.255-.624.913-1.409 1.531-2.233 2.109-.823-.578-1.608-1.195-2.232-2.11-.646-.943-1.153-2.256-1.25-4.254z" />
    </Svg>
  );
};
const SecurityPermissionIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SecurityPermissionIcon;