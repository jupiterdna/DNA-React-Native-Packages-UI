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
      <Path
        fillRule="evenodd"
        d="M6.178 7.285a4.075 4.075 0 118.15 0 4.075 4.075 0 01-8.15 0zM2 20.781v-3.447c0-.684.37-1.264.84-1.712.474-.453 1.12-.843 1.858-1.161 1.479-.639 3.458-1.048 5.555-1.048.643 0 1.275.039 1.884.11-.165.46-.274.947-.316 1.455l-1.567-1.153-1.577 1.16.586 1.308-.727 4.488H2zm9.818-5.767l-.573 1.28.727 4.487h2.315a14.793 14.793 0 01-.394-.451c-.889-1.064-2.092-2.805-2.092-4.867 0-.151.006-.301.017-.45zm5.83-3.823c-2.385 0-4.347 1.897-4.347 4.272 0 1.505.899 2.895 1.743 3.905.654.782 1.396 1.465 1.804 1.842.12.11.21.194.262.246l.532.535.531-.535c.052-.052.144-.136.263-.247.41-.377 1.152-1.06 1.806-1.84.846-1.01 1.747-2.4 1.747-3.906 0-2.326-1.876-4.198-4.2-4.27l-.008-.002h-.132zm-1.396 4.376a1.394 1.394 0 112.788 0 1.394 1.394 0 01-2.788 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const UserLocationManagerIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserLocationManagerIcon;
