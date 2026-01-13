import Link from 'next/link';

export default function ExercisesPage() {
  const exercises = [
    {
      title: "File Explorer",
      description: "Build a recursive file explorer component with create/delete functionality.",
      slug: "file-explorer",
      difficulty: "Hard"
    },
    {
      title: "Drag & Drop",
      description: "Implement a drag and drop interface for organizing items.",
      slug: "drag-drop",
      difficulty: "Medium"
    },
    {
      title: "Debounce & Throttle",
      description: "Visualize and understand debounce and throttle techniques.",
      slug: "debounce",
      difficulty: "Easy"
    },
    {
      title: "Todo App",
      description: "A comprehensive Todo application with state management.",
      slug: "todo-app",
      difficulty: "Medium"
    },
    {
      title: "Product List",
      description: "Fetch and display products with filtering and sorting.",
      slug: "product-list",
      difficulty: "Medium"
    },
    {
      title: "Virtualized List",
      description: "Efficiently render large lists by only rendering visible items.",
      slug: "virtualized-list",
      difficulty: "Hard"
    },
    {
      title: "Dropdown",
      description: "Create a reusable and accessible dropdown component.",
      slug: "dropdown",
      difficulty: "Easy"
    }

  ];

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Coding Exercises</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
          Sharpen your frontend skills with these machine coding challenges.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '2rem' 
      }}>
        {exercises.map((ex) => (
          <Link href={`/exercises/${ex.slug}`} key={ex.slug} className="card" style={{ display: 'block', textDecoration: 'none' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              marginBottom: '1rem' 
            }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{ex.title}</h3>
              <span style={{ 
                padding: '0.25rem 0.75rem', 
                borderRadius: '9999px', 
                fontSize: '0.75rem', 
                fontWeight: '600',
                background: ex.difficulty === 'Easy' ? 'rgba(16, 185, 129, 0.1)' : ex.difficulty === 'Medium' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: ex.difficulty === 'Easy' ? 'var(--success)' : ex.difficulty === 'Medium' ? 'var(--warning)' : 'var(--error)'
              }}>
                {ex.difficulty}
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {ex.description}
            </p>
            <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.875rem' }}>
              Start Challenge &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}