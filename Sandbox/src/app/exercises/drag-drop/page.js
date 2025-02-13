import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import DragDropComponent from "@/component/DragDropComponent/index";

export default async function ListProducts() {
  const sourceCode = await getSourceCode("src/component/DragDropComponent/index.jsx");
  return <ExerciseView title="File Explorer" DemoComponent={DragDropComponent} sourceCode={sourceCode} />;
}