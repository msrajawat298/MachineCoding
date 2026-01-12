import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import TodoApp from "@/component/TodoApp/index";

export default async function TodoAppPage() {
  const sourceCode = await getSourceCode("src/component/TodoApp/index.jsx");
  return <ExerciseView title="Todo App" DemoComponent={TodoApp} sourceCode={sourceCode} />;
}
