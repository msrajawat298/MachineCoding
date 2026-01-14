import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import Counter from "@/component/Counter";

export default async function CounterPage() {
  const sourceCode = await getSourceCode("src/component/Counter/index.jsx");
  return (
    <ExerciseView 
      title="Counter Demo" 
      DemoComponent={Counter} 
      sourceCode={sourceCode} 
    />
  );
}
