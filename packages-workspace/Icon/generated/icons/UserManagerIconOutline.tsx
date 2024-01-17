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
      <Path d="M7.924 7.29a4.075 4.075 0 118.15 0 4.075 4.075 0 01-8.15 0zm4.075-2.576a2.575 2.575 0 100 5.15 2.575 2.575 0 000-5.15zM3.746 20.785v-3.447c0-.683.371-1.264.84-1.712.474-.453 1.12-.843 1.858-1.16 1.479-.64 3.458-1.048 5.555-1.048 2.097 0 4.076.409 5.555 1.047.738.318 1.384.708 1.859 1.161.468.448.839 1.029.839 1.712v3.447H3.746zm1.876-4.074c-.311.297-.376.512-.376.627v1.947h5.28l.484-2.987-.58-1.296c-1.304.14-2.478.446-3.392.84-.636.275-1.112.578-1.416.869zm7.95-1.709l-.58 1.296.483 2.988h5.277v-1.948c0-.115-.065-.33-.376-.627-.304-.291-.78-.594-1.416-.869-.913-.394-2.087-.7-3.388-.84z" />
    </Svg>
  );
};
const UserManagerIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserManagerIconOutline;
