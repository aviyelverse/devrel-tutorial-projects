import chalk from "chalk";
import fs from "fs";
import path from "path";
import ncp from "ncp";
import { promisify } from "util";
import { projectInstall } from "pkg-install";
import execa from "execa";
import Listr from "listr";

// access
const access = promisify(fs.access);

// reccusive copy
const copy = promisify(ncp);

async function initializeGit(opts) {
  const result = await execa("git", ["init"], {
    cwd: opts.targetDirectory,
  });
  if (result.failed) {
    console.error(chalk.red("Failed to initialize git repository"));
    return Promise.reject(
      new Error(`Failed to initialize git repository: ${result.stderr}`)
    );
    process.exit(1);
  }
  return;
}

// async function to copy template files
async function copyProjectTemplateFiles(opts) {
  return copy(opts.templateDirectory, opts.targetDirectory, {
    clobber: false,
  });
}

export async function templateGrabber(opts) {
  opts = {
    ...opts,
    targetDirectory: opts.targetDirectory || process.cwd(),
  };

  const fullPathName = new URL(import.meta.url).pathname;
  let templateDir = path.resolve(
    fullPathName.substr(fullPathName.indexOf("/")),
    "../../projectTemplates",
    opts.template.toLowerCase()
  );
  templateDir = templateDir.substring(3);
  opts.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.log(chalk.red(`Template directory ${templateDir} does not exist`));
    console.log(err);
    process.exit(1);
  }

  // console.log("Copying project files....");
  // await copyProjectTemplateFiles(opts);

  const runningTask = new Listr([
    {
      title: "Hold up!! Copying project files...",
      task: async () => await copyProjectTemplateFiles(opts),
    },
    {
      title: "Waitt!!! Initializing git repository....",
      task: async () => await initializeGit(opts),
      enabled: () => opts.git,
    },
    {
      title: "REEEEEEE!! Installing dependencies....",
      task: async () =>
        await projectInstall({
          cwd: opts.targetDirectory,
        }),
      skip: () =>
        !opts.runInstall ? "--install to install all dependencies" : undefined,
    },
  ]);

  await runningTask.run();

  console.log(chalk.green(`Creating project from template ${opts.template}`));
  return true;
}
