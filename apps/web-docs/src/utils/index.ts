import * as Component from "@site/docs/component_usage";
const capitalize = (str?: string) => str[0].toUpperCase() + str.slice(1);
export const componentMapper = (id?: string) => {
  console.log("id", id);
  if (id) {
    const name = id
      .split("-")
      .map((i) => capitalize(i))
      .join("");
    console.log("name", name);
    return Component[name] ? Component[name]() : null;
  }
  return null;
};
