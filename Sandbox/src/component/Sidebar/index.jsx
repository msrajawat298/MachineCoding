import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar bg-light" style={{ width: "20%", minHeight: "100vh", borderRight: "1px solid #dee2e6" }}>
      <div className="p-3">
        <h5 className="mb-3">Exercise Menu</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" href="/exercises/file-explorer">
              File Explorer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/exercises/product-list">
              Product Listing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/exercises/drag-drop">
              Drag and Drop
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
  );
};

export default Sidebar;
