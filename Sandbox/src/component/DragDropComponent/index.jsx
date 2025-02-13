"use client";

import { useDropzone } from "react-dropzone";
import { useState } from "react";

export default function DragDropUploader() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => setFiles([...files, ...acceptedFiles]),
  });

  return (
    <div className="container mt-4">
      <div
        {...getRootProps()}
        className="d-flex flex-column align-items-center justify-content-center border border-primary border-3 rounded-3 p-5 text-center bg-light"
        style={{ minHeight: "300px", cursor: "pointer" }}
      >
        <input {...getInputProps()} />
        <p className="text-secondary fw-bold">
          Drag & drop files here or{" "}
          <span className="text-primary text-decoration-underline">click to upload</span>
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-4 p-3 bg-white shadow-sm rounded">
          <h5 className="text-primary fw-bold">Uploaded Files:</h5>
          <ul className="list-group">
            {files.map((file) => (
              <li key={file.path} className="list-group-item">
                {file.path}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
