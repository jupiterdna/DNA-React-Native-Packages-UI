//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const EscalationIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M18.766 7.83V2.651h-3.768v8.333l3.768-3.156zM14.998 12.627l.937.342c-.285.463-.598.907-.937 1.329v-1.67zM14.45 5.963v8.975a13.09 13.09 0 01-1.5 1.4l-.768.568c-.478.327-.98.622-1.5.884V5.963h3.767zM10.133 18.05V9.276H6.365v9.803c.51-.059 1.01-.147 1.5-.263l.768-.208a12.914 12.914 0 001.5-.558zM5.816 19.131v-6.544H2.05v6.279l.32.064c.387.075.78.133 1.18.172l.767.054a13.193 13.193 0 001.5-.025zM20.965 7.943l.987 5.626-5.366-1.958 4.379-3.668z" />
      <Path d="M18.066 12.15c-2.28 5.024-7.34 8.517-13.215 8.517-.946 0-1.871-.09-2.767-.264 1.625.61 3.385.945 5.223.945 5.836 0 10.885-3.368 13.311-8.265l-2.552-.932z" />
    </Svg>
  );
};
export default EscalationIcon;
