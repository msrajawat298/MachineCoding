export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VitableTech Sandbox",
    "url": "https://sandbox.vitabletech.in",
    "description": "Practice real-world frontend interview questions with an interactive sandbox from VitableTech.",
    "publisher": {
      "@type": "Organization",
      "name": "VitableTech"
    }
  };

  return (
    <>
      <link rel="canonical" href="https://sandbox.vitabletech.in" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
