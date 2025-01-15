import type { Context } from "@oomol/types/oocana";
import { exec } from "child_process";
import { promisify } from "util";
const execa = promisify(exec);


type Inputs = {
  input_file: string;
}
type Outputs = {
  output: string;
}

export default async function(
  params: Inputs,
  context: Context<Inputs, Outputs>
): Promise<Outputs> {
  const {apiKey, baseUrl} = context.OOMOL_LLM_ENV;
  const {input_file} = params;
  const res =  await execa(`npx ai-renamer ${input_file} --provider=openai --model=Qwen/Qwen2-VL-72B-Instruct --base-url=${baseUrl} --api-key=${apiKey}`);
  console.log(res.stdout)
  console.log(res.stderr)
  return { output: input_file };
};
