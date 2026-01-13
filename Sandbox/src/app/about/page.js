export default function About() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About <span className="text-gradient">VitableTech</span> Sandbox</h1>
      
      <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          VitableTech creates powerful open source solutions and provides enterprise services to help businesses thrive in the digital world. 
          This Sandbox is designed to help developers master machine coding interviews by providing real-world challenges and an interactive environment to solve them.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Open Source Innovation</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            We believe in the power of community and open source. This project is a testament to our commitment to sharing knowledge and tools.
          </p>
        </div>
        
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Enterprise Grade</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Our solutions are built with scalability, performance, and best practices in mind, ensuring they meet the rigorous demands of modern enterprises.
          </p>
        </div>
      </div>
    </div>
  )
}