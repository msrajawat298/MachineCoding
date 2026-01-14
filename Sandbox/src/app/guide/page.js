
import Link from 'next/link';

export default function GuidePage() {
  return (
    <div className="container" style={{ padding: '3rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '800' }}>Developer Guide</h1>
      
      <div className="card mb-4" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>How to Add a New Exercise</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            We have streamlined the process of adding new machine coding challenges. 
            You no longer need to create complicated routing or page files manually.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <section>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>1</span>
            Create a Folder
          </h3>
          <p>
            Navigate to <code style={{ background: 'rgba(0,0,0,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>src/challenges</code> and create a new folder with the name of your exercise.
          </p>
          <div style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace' }}>
             /src<br/>
             &nbsp;&nbsp;/challenges<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;/<span style={{ color: '#4ec9b0' }}>my-new-component</span> <span style={{ color: '#6a9955' }}>// &lt;-- Create this folder</span>
          </div>
          <p className="mt-2 text-secondary" style={{ fontSize: '0.9rem' }}>
            <em>Note: The folder name will be used as the URL slug (e.g., /exercises/my-new-component) and formatted for the sidebar title.</em>
          </p>
        </section>

        <section>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>2</span>
            Create index.jsx
          </h3>
          <p>
            Inside your new folder, create an <code style={{ background: 'rgba(0,0,0,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>index.jsx</code> file. This file must export your component as the <strong>default export</strong>.
          </p>
          <div style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace' }}>
            <span style={{ color: '#c586c0' }}>export</span> <span style={{ color: '#c586c0' }}>default</span> <span style={{ color: '#569cd6' }}>function</span> <span style={{ color: '#dcdcaa' }}>MyNewComponent</span>() &#123;<br/>
            &nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> (<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#569cd6' }}>div</span>&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#569cd6' }}>h1</span>&gt;Hello World&lt;/<span style={{ color: '#569cd6' }}>h1</span>&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: '#569cd6' }}>div</span>&gt;<br/>
            &nbsp;&nbsp;);<br/>
            &#125;
          </div>
        </section>

        <section>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>3</span>
            Automatic Magic
          </h3>
          <p>
            That's it! Your component will automatically:
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
            <li>Appear in the Sidebar navigation under "Challenges".</li>
            <li>Have a dedicated page route at <code>/exercises/my-new-component</code>.</li>
            <li>Display the live component demo.</li>
            <li>Automatically show the source code in the "Code" tab.</li>
          </ul>
        </section>

      </div>

      <div style={{ marginTop: '3rem', borderTop: '1px solid #ddd', paddingTop: '2rem' }}>
        <h3>Best Practices</h3>
        <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', marginTop: '1rem' }}>
            <li>If your exercise requires multiple components, you can create them in the same folder, but make sure <code>index.jsx</code> is the main entry point.</li>
            <li>Use <code>"use client"</code> at the top of your file if you need React hooks like <code>useState</code> or <code>useEffect</code>.</li>
            <li>You can import images or other assets directly into your component.</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <Link href="/exercises" className="btn btn-primary">
            &larr; Back to Exercises
        </Link>
      </div>

    </div>
  );
}
