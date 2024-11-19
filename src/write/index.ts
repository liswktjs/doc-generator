const path = require("path");
const fs = require("fs-extra");

interface Props {
  filePath: string;
  description: string;
}

export const writeFileContent = async ({ filePath, description }: Props) => {
  const absolutePath = path.resolve(filePath);
  const newFilePath = path.join(
    path.dirname(absolutePath),
    `${path.basename(filePath, path.extname(filePath))}-description.md`
  );

  fs.writeFile(newFilePath, description, (err: Error) => {
    if (err) {
      console.error("Error writing md", err);
      return;
    }
    console.log("Success");
  });
};
