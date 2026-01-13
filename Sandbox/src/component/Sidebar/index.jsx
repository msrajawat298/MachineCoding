import fs from "fs";
import path from "path";
import SidebarList from "./SidebarList";
import styles from "./Sidebar.module.css";

const getExerciseFolders = () => {
  const exercisesPath = path.join(process.cwd(), "src/app/exercises");
  // Filter out files like page.js, layout.js and ensure only directories are returned
  return fs.readdirSync(exercisesPath).filter((file) => {
    try {
      return fs.statSync(path.join(exercisesPath, file)).isDirectory();
    } catch (e) {
      return false;
    }
  });
};

const Sidebar = () => {
  const exerciseFolders = getExerciseFolders();

  return (
    <div className={styles.sidebar}>
      <h5 className={styles.title}>Challenges</h5>
      <SidebarList folders={exerciseFolders} />
    </div>
  );
};

export default Sidebar;

