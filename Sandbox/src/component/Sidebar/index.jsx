import fs from "fs";
import path from "path";
import SidebarList from "./SidebarList";
import styles from "./Sidebar.module.css";

const getExerciseFolders = () => {
  const exercisesPath = path.join(process.cwd(), "src/challenges");
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

      <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
        <h5 className={styles.title} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Resources</h5>
        <ul className={styles.navList}>
          <li>
            <a href="/guide" className={styles.navLink}>
              📖 Developer Guide
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

