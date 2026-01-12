import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import { DebounceDemo } from "@/component/DebounceThrottleDemo";

export default async function DebouncePage() {
  const sourceCode = await getSourceCode("src/component/DebounceThrottleDemo/index.jsx");
  return <ExerciseView title="Debounce Demo" DemoComponent={DebounceDemo} sourceCode={sourceCode} />;
}
