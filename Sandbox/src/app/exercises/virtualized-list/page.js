import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import VirtualizedListDemo from "@/component/VirtualizedList";

export default async function VirtualizedListPage() {
  const sourceCode = await getSourceCode("src/component/VirtualizedList/index.jsx");
  return (
    <ExerciseView 
      title="Virtualized List" 
      DemoComponent={VirtualizedListDemo} 
      sourceCode={sourceCode} 
    />
  );
}
