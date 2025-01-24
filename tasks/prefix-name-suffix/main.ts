import type { Context } from "@oomol/types/oocana";
import fs from "fs-extra";
import path from "path";

type Inputs = {
  files: string[];
  prefix: string | null;
  suffix: string | null;
}
type Outputs = {
  files: string[];
}

export default async function (
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  const { files, prefix, suffix } = params;
  const new_prefix = prefix || "";
  const new_suffix = suffix || "";
  const new_files = await renameFiles(files, new_prefix, new_suffix)
  return { files: new_files };
};

const renameFiles = async (fileList: string[], pre_name: string, end_name: string): Promise<string[]> => {
  const newFileNames = [];
  try {
    for (const oldFilePath of fileList) {
      const dirName = path.dirname(oldFilePath);
      const fileName = path.basename(oldFilePath, path.extname(oldFilePath));
      const extName = path.extname(oldFilePath);
      const newFileName = `${pre_name}${fileName}${end_name}${extName}`;
      const newFilePath = path.join(dirName, newFileName);
      await fs.rename(oldFilePath, newFilePath);
      console.log(`Renamed ${oldFilePath} to ${newFilePath}`);
      newFileNames.push(newFilePath);
    }
    console.log('All files renamed successfully!');
    return newFileNames;
} catch (err) {
  console.error('Error renaming files:', err);
  return newFileNames;
}
};
