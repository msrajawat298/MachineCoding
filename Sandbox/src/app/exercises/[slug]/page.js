
import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const exercisesPath = path.join(process.cwd(), "src/challenges");
  try {
    const folders = fs.readdirSync(exercisesPath).filter((file) => {
      return fs.statSync(path.join(exercisesPath, file)).isDirectory();
    });
    return folders.map((slug) => ({ slug }));
  } catch (e) {
    return [];
  }
}

async function getChallengeFiles(slug) {
    const dirPath = path.join(process.cwd(), `src/challenges/${slug}`);
    
    try {
        const files = fs.readdirSync(dirPath);
        const fileContents = {};

        for (const file of files) {
            // Skip binary or unrelated files if necessary, or just read all text files
            if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.json')) {
                const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
                // Sandpack expects files with leading slash usually, but relative imports work with clean names
                // logic: if index.jsx imports "./ExplorerView.module.css", we need "ExplorerView.module.css" to exist.
                fileContents[file] = content;
            }
        }
        return fileContents;

    } catch(e) {
        console.error("Error reading challenge files", e);
        return {};
    }
}

export default async function ExercisePage({ params }) {
  const { slug } = await params;
  
  // Format title: "file-explorer" -> "File Explorer"
  const title = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  let Component;
  try {
    // Dynamic import of the challenge component
    const mod = await import(`@/challenges/${slug}/index.jsx`);
    Component = mod.default;
  } catch (e) {
    console.error(`Failed to load component for ${slug}:`, e);
    notFound();
  }

  // Get source code for main view (legacy support)
  const sourcePath = `src/challenges/${slug}/index.jsx`;
  const sourceCode = await getSourceCode(sourcePath);
  
  // Get all files for Sandbox
  const sandboxFiles = await getChallengeFiles(slug);

  return (
    <ExerciseView
      title={title}
      DemoComponent={Component}
      sourceCode={sourceCode}
      sandboxFiles={sandboxFiles}
    />
  );
}
