require("dotenv").config();
import { generateDoc } from "./ai";
import { readFileContent } from "./read";
import { writeFileContent } from "./write";
import { createSpinner } from "nanospinner";

const { Command } = require("commander");

const program = new Command();

program
  .version("1.0.0")
  .description(
    "read a file and return markdown documentation which include its content producing by chat gpt api"
  );

program
  .command("docs <filePath> <description>")
  .action(async (filePath: string, description: string) => {
    const spinner = createSpinner("Processing request...").start();

    spinner.update("Reading file content...");
    const content = await readFileContent(filePath);

    spinner.update("Generating documentation...");

    const documentation = await generateDoc({ file: content, description });

    if (documentation) {
      spinner.update("Writing documentation to file...");

      await writeFileContent({ filePath, description: documentation });
      spinner.success("Documentation generated and saved successfully!");
    } else {
      spinner.warn("Fail to generate documentation");
    }
  });

program.parse(process.argv);
