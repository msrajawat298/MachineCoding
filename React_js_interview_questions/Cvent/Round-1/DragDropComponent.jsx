import { useDropzone } from "react-dropzone";
import { useState } from "react";

export default function DragDropUploader() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
  });

  return (
    <div {...getRootProps()} className="border-dashed border-2 p-4">
      <input {...getInputProps()} />
      <p>Drag & drop files here or click to upload</p>
      <ul>
        {files.map((file) => (
          <li key={file.path}>{file.path}</li>
        ))}
      </ul>
    </div>
  );
}
