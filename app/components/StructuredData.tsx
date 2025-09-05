import React from "react";

const StructuredData: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sque",
    url: "https://sque.ai",
    logo: "https://sque.ai/logo.png",
    description:
      "Transform qualitative customer feedback into quantitative insights. Sque synthesizes interviews, surveys, and feedback into structured insights, themes, and evidence you can act on.",
    foundingDate: "2023",
    sameAs: [
      "https://twitter.com/sque_ai",
      "https://linkedin.com/company/sque-ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@sque.ai",
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sque",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-powered customer research platform that transforms qualitative feedback into quantitative insights for product teams.",
    url: "https://sque.ai",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available",
    },
    featureList: [
      "Customer interview analysis",
      "Survey data synthesis",
      "Feedback theme extraction",
      "Product roadmap planning",
      "Feature prioritization",
      "Sentiment analysis",
      "Pattern detection",
      "Team collaboration",
      "Integration with Slack, Notion, Airtable",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sque",
    url: "https://sque.ai",
    description:
      "Turn customer conversations into product decisions with AI-powered research workflows.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sque.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
};

export default StructuredData;
