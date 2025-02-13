import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import ListingProducts from "@/component/ListingProducts/index";

export default async function ListProducts() {
  const sourceCode = await getSourceCode("src/component/ListingProducts/index.jsx");
  return <ExerciseView title="File Explorer" DemoComponent={ListingProducts} sourceCode={sourceCode} />;
}