import fs from 'fs';
import path from 'path';

export async function getSourceCode(codePath) {
  if (!codePath) return "Error: Invalid code path";
  
  try {
    const filePath = path.join(process.cwd(), codePath);
    const sourceCode = await fs.promises.readFile(filePath, 'utf8');
    return sourceCode;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
