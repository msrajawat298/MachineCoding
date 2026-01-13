import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import { ThrottleDemo } from "@/component/DebounceThrottleDemo";

export default async function ThrottlePage() {
  const sourceCode = await getSourceCode("src/utils/throttle.js");
  return <ExerciseView title="Throttle Demo" DemoComponent={ThrottleDemo} sourceCode={sourceCode} />;
}
