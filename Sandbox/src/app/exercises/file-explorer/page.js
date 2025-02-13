import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import ExplorerView from "@/component/ExplorerView/";

export default async function FileExplorerPage() {
  const sourceCode = await getSourceCode("src/component/ExplorerView/index.jsx");
  return <ExerciseView title="File Explorer" DemoComponent={ExplorerView} sourceCode={sourceCode} />;
}
