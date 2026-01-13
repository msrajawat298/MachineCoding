import Link from 'next/link';

export default function Home() {
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
    <div className="home-page">
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 0', 
        overflow: 'hidden',
        background: 'radial-gradient(circle at top center, rgba(79, 70, 229, 0.15), transparent 40%)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1rem', 
            borderRadius: '9999px', 
            background: 'rgba(79, 70, 229, 0.1)', 
            color: 'var(--primary)',
            fontWeight: '600',
            marginBottom: '1.5rem',
            border: '1px solid rgba(79, 70, 229, 0.2)'
          }}>
            Powered by VitableTech
          </div>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Master <span className="text-gradient">Machine Coding</span> Interviews
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Practice real-world frontend interview questions with our interactive sandbox. 
            Built to help you thrive in the digital world.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/exercises" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Start Practicing
            </Link>
            <Link href="/about" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'url("/grid.svg")', // We might need to create this or remove it
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none'
        }} />
      </section>

      {/* Exercises Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Popular Exercises</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Hand-picked challenges to sharpen your skills.</p>
            </div>
            <Link href="/exercises" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View All Exercises &rarr;
            </Link>
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
                  Solve Challenge &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}