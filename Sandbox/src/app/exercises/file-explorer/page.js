import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import FileExplorer from "./FileExplorer";

export default async function FileExplorerPage() {
  const sourceCode = await getSourceCode("src/component/ExplorerView/index.jsx");

  return <FileExplorer sourceCode={sourceCode} />;
}
