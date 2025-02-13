import { useState } from "react";

const folderData = {
  name: "Root",
  children: [
    { name: "public", children: [{ name: "index.html" }] },
    {
      name: "src",
      children: [
        { name: "components", children: [{ name: "Home.js" }] },
        { name: "App.js" }
      ]
    },
    { name: "package.json" }
  ]
};

function ExplorerView({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="ml-4">
      <div className="cursor-pointer font-bold" onClick={() => setIsOpen(!isOpen)}>
        📁 {data.name}
      </div>
      {isOpen && (
        <div className="ml-4">
          {data.children?.map((child, index) =>
            child.children ? <ExplorerView key={index} data={child} /> : <div key={index}>📄 {child.name}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ExplorerView() {
  return (
    <div className="p-4 border rounded w-64">
      <ExplorerView data={folderData} />
    </div>
  );
}
