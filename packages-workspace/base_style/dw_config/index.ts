import _ from "lodash";
import { promises } from "fs";
import { customStyle } from "./config";

/**
 * Reads a JSON file asynchronously.
 * @param filePath - The path to the JSON file.
 * @returns The parsed JSON data.
 */
const readJsonFile = async (filePath: string) => {
  try {
    const fileContent = await promises.readFile(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Generates files by merging the provided JSON with the contents of an existing JSON file.
 * @param json - The JSON data to merge.
 */
const mergeFiles = async (json: any) => {
  try {
    const gen = await readJsonFile("./dw_config/output.json");
    const merge = { ...gen, ...json };
    await promises.writeFile("./dw_config/generated.json", JSON.stringify(merge, null, 2));
  } catch (error) {
    console.error(error);
  }
};

/**
 * Generates files based on the provided styles.
 * @param styles - The styles to generate files for.
 */
const genfiles = async (styles: any) => {
  if (_.isEmpty(styles)) {
    return;
  }

  const json: any = {};

  Object.entries(styles).forEach(([key, value]) => {
    json[key] = {
      style: value,
    };
  });

  try {
    await mergeFiles(json);
  } catch (error) {
    console.error(error);
  }
};

genfiles(customStyle);
