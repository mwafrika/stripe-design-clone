export interface FeatureData {
  id: string;
  icon: string; // Can be SVG path or image file path
  iconColor: "blue" | "green" | "purple" | "orange" | "red";
  category: string;
  title: string;
  description: string;
  buttonText: string;
  seeAlso: string[];
  image: string; // Image file path for visual content
}

export const features: FeatureData[] = [
  {
    id: "synthesis",
    icon: "/1.svg",
    iconColor: "blue",
    category: "Synthesis",
    title: "Turn customer conversations into product decisions",
    description:
      "Sque synthesizes interviews, surveys, and feedback into structured insights, themes, and evidence you can act on. Transform qualitative data into quantitative insights.",
    buttonText: "Start with Sque",
    seeAlso: [
      "Customer interviews analysis",
      "Survey data synthesis",
      "Feedback theme extraction",
    ],
    image: "/1.svg",
  },
  {
    id: "roadmaps",
    icon: "/2.svg",
    iconColor: "green",
    category: "Roadmaps",
    title: "Build evidence-based product roadmaps",
    description:
      "Create data-driven product decisions backed by real customer evidence. Sque helps you prioritize features based on actual user needs and feedback patterns.",
    buttonText: "Start with Evidence",
    seeAlso: [
      "Product roadmap planning",
      "Feature prioritization",
      "User story mapping",
    ],
    image: "/2.svg",
  },
  {
    id: "patterns",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    iconColor: "purple",
    category: "Patterns",
    title: "Uncover hidden patterns in customer data",
    description:
      "Discover recurring themes, sentiment patterns, and behavioral insights across all your customer touchpoints. Sque's AI identifies patterns humans might miss.",
    buttonText: "Start with Patterns",
    seeAlso: [
      "Sentiment analysis",
      "Behavioral pattern detection",
      "Trend identification",
    ],
    image: "/3.svg",
  },
  {
    id: "scale",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    iconColor: "orange",
    category: "Scale",
    title: "Scale customer research across your organization",
    description:
      "Democratize customer insights across teams. Sque makes it easy for everyone to access, understand, and act on customer research without needing a PhD in data science.",
    buttonText: "Start with Scale",
    seeAlso: [
      "Team collaboration tools",
      "Knowledge sharing",
      "Research democratization",
    ],
    image: "/4.svg",
  },
  {
    id: "integrations",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    iconColor: "red",
    category: "Integrations",
    title: "Integrate with your existing workflow",
    description:
      "Connect Sque with your favorite tools. Import data from Slack, Notion, Airtable, and more. Export insights directly to your product management and design tools.",
    buttonText: "Start with Integrations",
    seeAlso: ["Slack integration", "Notion sync", "API access"],
    image: "/5.svg",
  },
];
