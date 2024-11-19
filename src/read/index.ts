const fs = require("fs-extra");
const path = require("path");

export const readFileContent = async (filepath: string) => {
  try {
    const absolutePath = path.resolve(filepath);

    if (!fs.existsSync(absolutePath)) {
      console.error(`can't find ${filepath}`);
      return;
    }
    const content = await fs.readFile(absolutePath, "utf-8");

    return content;
  } catch (e) {
    console.error("Reading Error occur", e);
  }
};
