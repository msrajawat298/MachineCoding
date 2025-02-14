import { getSourceCode } from "@/component/CodeBlock/CodeBlockServer";
import ExerciseView from "@/component/ExerciseView";
import DropDown from "@/component/DropDown/index";

export default async function ListProducts() {
  const sourceCode = await getSourceCode("src/component/DropDown/index.jsx");
  const dropdownProps = {
    name: "select-example",
    Label: "Select",
    items: {
      1: "Option 1",
      2: "Option 2",
      3: "Option 3"
    },
    isMulitpleSelect: false, // for single select
    defaultValue: "1", // optional
  };

  return <>
  <ExerciseView
    title="DropDown" 
    DemoComponent={DropDown}
    demoProps={dropdownProps}
    sourceCode={sourceCode} />
  <ExerciseView
    title="DropDown" 
    DemoComponent={DropDown}
    demoProps={{ ...dropdownProps, isMulitpleSelect: true , name: "select-example-multiple", Label: "Multiple Select" }}
    sourceCode={sourceCode} />
  </>;

}