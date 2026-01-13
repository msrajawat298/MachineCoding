import Sidebar from "@/component/Sidebar";

export default function ExercisesLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 4rem)' }}>
      {/* Sidebar */}
      <div style={{ flexShrink: 0 }}>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

