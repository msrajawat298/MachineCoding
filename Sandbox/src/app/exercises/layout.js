import Sidebar from "@/component/Sidebar";

export default function ExercisesLayout({ children }) {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="main-content" style={{ width: "80%" }}>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
