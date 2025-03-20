import type { Context } from "@oomol/types/oocana";
import fs from "fs-extra";
import path from "path";

// Define input and output types
type Inputs = {
  files: string[];
  prefix: string | null;
  suffix: string | null;
}
type Outputs = {
  files: string[];
}

// Export default function
export default async function (
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  // Destructure inputs with default values
  const { files, prefix = "", suffix = "" } = params;
  // Call renameFiles and return new file paths
  const new_files = await renameFiles(files, prefix, suffix);
  return { files: new_files };
}

// Define renameFiles function
const renameFiles = async (fileList: string[], pre_name: string, end_name: string): Promise<string[]> => {
  // Map over fileList and rename each file
  return Promise.all(
    fileList.map(async (oldFilePath) => {
      try {
        // Get directory name
        const dirName = path.dirname(oldFilePath);
        // Get file name without extension
        const fileName = path.basename(oldFilePath, path.extname(oldFilePath));
        // Get file extension
        const extName = path.extname(oldFilePath);
        // Create new file name with prefix and suffix
        const newFileName = `${pre_name}${fileName}${end_name}${extName}`;
        // Create new file path
        const newFilePath = path.join(dirName, newFileName);
        // Rename file
        await fs.rename(oldFilePath, newFilePath);
        console.log(`Renamed ${oldFilePath} to ${newFilePath}`);
        return newFilePath;
      } catch (err) {
        console.error(`Error renaming file ${oldFilePath}:`, err.message);
        throw err;
      }
    })
  );
};