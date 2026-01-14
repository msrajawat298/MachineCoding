
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

  // Get source code
  const sourcePath = `src/challenges/${slug}/index.jsx`;
  const sourceCode = await getSourceCode(sourcePath);

  return (
    <ExerciseView
      title={title}
      DemoComponent={Component}
      sourceCode={sourceCode}
    />
  );
}
