import { DropdownCompoundTypes } from "./types";
import { Container, Content, Popover } from "./components";

const Dropdown: DropdownCompoundTypes = (props) => {
  return props.children;
};

Dropdown.Container = Container;
Dropdown.Popover = Popover;
Dropdown.Content = Content;

Dropdown.Container.displayName = "Container";
Dropdown.Popover.displayName = "PopOver";
Dropdown.Content.displayName = "Content";

export default Dropdown;
