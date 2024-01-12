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
      <Path d="M14.582 2.002H9.418l-.428 3.15a7.471 7.471 0 00-1.415.817L4.633 4.766 2.05 9.237l2.513 1.946a7.555 7.555 0 000 1.635l-2.513 1.945 2.582 4.472 2.942-1.204c.438.321.912.596 1.415.818l.428 3.149h5.164l.428-3.15c.308-.136.604-.291.888-.465l-1.226-.728a5.92 5.92 0 01-5.32-.373 5.918 5.918 0 01-2.705-3.589 5.925 5.925 0 01.098-3.35c.328-.919.666-1.479 1.31-2.214a5.933 5.933 0 0110.227 3.453l1.19.707a7.478 7.478 0 00-.038-1.104l2.516-1.948-2.582-4.472-2.944 1.205a7.471 7.471 0 00-1.414-.818l-.428-3.15z" />
      <Path d="M9.56 9.447a3.932 3.932 0 016.718 3.27l5.098 3.03c.238.141.317.45.175.688L20.5 18.206a.502.502 0 01-.688.175l-5.1-3.03a3.932 3.932 0 01-6.083-4.336l2.952 1.754.932-1.568L9.56 9.447z" />
    </Svg>
  );
};
const SettingsWrenchIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SettingsWrenchIcon;
