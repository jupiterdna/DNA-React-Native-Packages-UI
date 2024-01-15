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
      <Path d="M2.7 2.7H11v7.444a7.093 7.093 0 00-.762.856H2.7V2.7zM18.084 8.499c1.218 0 2.308.412 3.217 1.064V2.7h-8.3v6.156a5.333 5.333 0 011.924-.357h3.159zM8.5 16.498a9.74 9.74 0 01.637-3.5H2.7v8.3h7.068c-.816-1.367-1.267-3.041-1.267-4.8zM17.654 16.499c0-.99-.31-1.854-.775-2.442.364-.567.796-.822 1.192-.822.406 0 .851.268 1.22.866.364.59.606 1.436.606 2.397 0 .961-.242 1.808-.606 2.398-.369.598-.814.866-1.22.866-.396 0-.828-.255-1.192-.822.283-.356.508-.815.642-1.341.086-.341.133-.711.133-1.1z" />
      <Path d="M18.084 22.998h-3.159c-1.418 0-2.66-.78-3.53-1.96-.872-1.18-1.395-2.786-1.395-4.54 0-1.753.523-3.36 1.395-4.54.87-1.18 2.112-1.96 3.53-1.96h3.159c1.408 0 2.65.78 3.521 1.96.87 1.18 1.395 2.787 1.395 4.54 0 1.754-.524 3.36-1.395 4.54-.87 1.18-2.113 1.96-3.521 1.96zm-.01-10.75c-.876 0-1.59.572-2.06 1.334-.476.77-.753 1.802-.753 2.916 0 1.114.277 2.147.753 2.917.47.762 1.184 1.335 2.06 1.335.874 0 1.589-.573 2.06-1.335.475-.77.753-1.802.753-2.916 0-1.115-.278-2.147-.754-2.917-.47-.762-1.185-1.335-2.06-1.335z" />
    </Svg>
  );
};
const CarPartCategoryIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CarPartCategoryIcon;