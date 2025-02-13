import fs from "fs";
import path from "path";
import Link from "next/link";

const getExerciseFolders = () => {
  const exercisesPath = path.join(process.cwd(), "src/app/exercises"); // Adjust based on your project structure
  return fs.readdirSync(exercisesPath).filter((file) => {
    return fs.statSync(path.join(exercisesPath, file)).isDirectory();
  });
};

const Sidebar = () => {
  const exerciseFolders = getExerciseFolders();

  return (
    <div className="sidebar bg-light" style={{ width: "20%", minHeight: "100vh", borderRight: "1px solid #dee2e6" }}>
      <div className="p-3">
        <h5 className="mb-3">Exercise Menu</h5>
        <ul className="nav flex-column">
          {exerciseFolders.map((folder, index) => (
            <li key={index} className="nav-item">
              <Link className="nav-link" href={`/exercises/${folder}`}>
                {folder.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
