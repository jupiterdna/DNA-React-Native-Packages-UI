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
      <Path d="M20.748 18.942v-7.969c.404-.351.705-.789.908-1.312.201-.524.205-1.092.012-1.703l-1.031-3.323c-.143-.431-.371-.77-.686-1.016-.314-.246-.693-.369-1.137-.369H5.164c-.443 0-.824.129-1.144.387-.163.131-.301.283-.416.457-.11.167-.198.354-.262.56L2.33 7.958a2.886 2.886 0 00-.143.874c.002.29.053.567.155.834.203.528.504.957.906 1.288v7.988c0 .505.176.933.525 1.283.248.249.536.409.862.481.135.03.275.044.422.044H18.94c.26 0 .498-.046.717-.139.207-.087.397-.216.567-.386.35-.35.523-.778.523-1.283zM15.43 9.75c-.274.334-.686.501-1.23.501-.4 0-.74-.153-1.024-.46a1.547 1.547 0 01-.428-1.09V4.75h2.412l.608 3.923c.05.384-.063.742-.338 1.076zm-4.612.042c-.285.306-.66.459-1.119.459-.48 0-.857-.168-1.135-.503-.277-.335-.388-.68-.334-1.036l.608-3.961h2.41V8.7c0 .42-.143.784-.43 1.09zm-4.613.071a1.33 1.33 0 01-.957.388c-.586 0-1.006-.219-1.262-.657a1.688 1.688 0 01-.256-.838c-.001-.154.022-.309.069-.463l.96-3.253a.435.435 0 01.145-.217.422.422 0 01.26-.072h2.123L6.7 8.889a1.76 1.76 0 01-.209.607 1.63 1.63 0 01-.285.366zm13.785-.25c-.287.426-.7.638-1.242.638-.37 0-.688-.13-.955-.388a1.693 1.693 0 01-.494-.973L16.71 4.75h2.072l.069.003c.078.007.14.027.191.06a.3.3 0 01.082.079.442.442 0 01.063.127l1.011 3.273c.149.456.08.896-.209 1.32z" />
    </Svg>
  );
};
const StoreIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StoreIcon;