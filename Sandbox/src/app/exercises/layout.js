import Link from "next/link";

export default function ExercisesLayout({ children }) {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-light" style={{ width: '20%', minHeight: '100vh', borderRight: '1px solid #dee2e6' }}>
        <div className="p-3">
          <h5 className="mb-3">Exercise Menu</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" href="/exercises/file-explorer">
                File Explorer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/exercises/todo-app">
                Todo App
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content" style={{ width: '80%' }}>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}