import type { Context } from "@oomol/types/oocana";
import { exec } from "child_process";
import fs from "fs/promises";
import { promisify } from "util";
import path from "path";

const execa = promisify(exec);

type Inputs = {
  dir: string;
  model: string | null;
};

type Outputs = {
  dir: string;
  images: string[];
};

// Supported image file extensions
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"]);

// Check if the file is an image
function isImageFile(filename: string): boolean {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.has(ext);
}

export default async function(
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  const { apiKey, baseUrl } = context.OOMOL_LLM_ENV;
  const { dir, model = "oomol-VL" } = params;

  try {
    await execa(`npx ai-renamer ${dir} --provider=openai --model=${model} --base-url=${baseUrl} --api-key=${apiKey}`);

    const files = await fs.readdir(dir);
    // Filter out image files
    const imageFiles = files.filter(file => isImageFile(file));

    return { dir, images: imageFiles };
  } catch (error) {
    // Error handling
    console.error("Error occurred:", error);
    throw new Error("Failed to rename files or read directory");
  }
}