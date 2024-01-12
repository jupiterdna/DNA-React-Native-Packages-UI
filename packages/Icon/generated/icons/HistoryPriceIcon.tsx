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
      <Path d="M5.059 8.633A7.75 7.75 0 114.355 13h-1.51A9.25 9.25 0 104.21 7.073V3.804h-1.5v6.329H7.98v-1.5H5.059z" />
      <Path d="M12.676 7.541v-1.31h-1.5v1.297a2.987 2.987 0 00-1.27.669l-.024.022-.023.024c-1.041 1.092-.956 2.868.49 3.689.558.316 1.108.493 1.545.635l.161.052c.49.16.786.284 1.011.49.3.273.415.574.416.825.001.246-.104.517-.39.754-.199.165-.497.265-.849.287h-.297c-.47-.028-.811-.172-.908-.248a2.7 2.7 0 01-.467-.48c-.151-.2-.266-.42-.38-.641a12.989 12.989 0 00-.117-.222l-1.318.715c.043.079.084.158.126.238.098.186.195.372.307.548a4.202 4.202 0 00.918 1.018c.275.217.658.376 1.069.471v1.395h1.5v-1.334c.475-.075.963-.251 1.374-.593.606-.502.936-1.189.932-1.915-.003-.72-.334-1.406-.905-1.927-.487-.444-1.069-.647-1.553-.806l-.168-.055c-.446-.145-.85-.276-1.266-.512-.488-.277-.592-.857-.167-1.326.696-.585 1.728-.405 2.272.226l.49.568 1.136-.979-.49-.568a3.251 3.251 0 00-1.655-1.007z" />
    </Svg>
  );
};
const HistoryPriceIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default HistoryPriceIcon;