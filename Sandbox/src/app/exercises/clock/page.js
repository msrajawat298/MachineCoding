import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import Clock from "@/component/Clock";

export default async function ClockPage() {
  const sourceCode = await getSourceCode("src/component/Clock/index.jsx");
  return (
    <ExerciseView 
      title="Clock Demo" 
      DemoComponent={Clock} 
      sourceCode={sourceCode} 
    />
  );
}
