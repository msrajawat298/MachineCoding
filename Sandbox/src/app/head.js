export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VitableTech Sandbox",
    "url": "https://vitabletech.dev",
    "description": "Practice real-world frontend interview questions with an interactive sandbox from VitableTech.",
    "publisher": {
      "@type": "Organization",
      "name": "VitableTech"
    }
  };

  return (
    <>
      <link rel="canonical" href="https://vitabletech.dev" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
