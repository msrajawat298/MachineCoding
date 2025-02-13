"use client";
import { useState } from "react";
import styles from "./ExplorerView.module.css";

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

function Folder({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.folder}>
      <div className={styles.folderTitle} onClick={() => setIsOpen(!isOpen)}>
        📁 {data.name}
      </div>
      {isOpen && (
        <div className={styles.folderContent}>
          {data.children?.map((child, index) =>
            child.children ? <Folder key={index} data={child} /> : <div key={index} className={styles.file}>📄 {child.name}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ExplorerView() {
  return (
    <div className={styles.explorerContainer}>
      <Folder data={folderData} />
    </div>
  );
}
