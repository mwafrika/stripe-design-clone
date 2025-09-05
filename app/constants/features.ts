export interface FeatureData {
  id: string;
  icon: string;
  iconColor: "blue" | "green" | "purple" | "orange" | "red";
  category: string;
  title: string;
  description: string;
  buttonText: string;
  seeAlso: string[];
  visual: {
    title: string;
    items: Array<{
      label: string;
      value: string;
      color: "blue" | "green" | "purple" | "yellow" | "orange" | "red";
      animate?: boolean;
    }>;
  };
}

export const features: FeatureData[] = [
  {
    id: "synthesis",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
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
    visual: {
      title: "Synthesis Dashboard",
      items: [
        {
          label: "Processing Interviews",
          value: "47 customer interviews analyzed",
          color: "blue",
          animate: true,
        },
        {
          label: "Insights Generated",
          value: "23 actionable insights ready",
          color: "green",
        },
      ],
    },
  },
  {
    id: "roadmaps",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
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
    visual: {
      title: "Roadmap Builder",
      items: [
        {
          label: "Features Prioritized",
          value: "12 features ranked by evidence",
          color: "green",
        },
        {
          label: "Roadmap Updated",
          value: "Q2 roadmap ready",
          color: "purple",
          animate: true,
        },
      ],
    },
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
    visual: {
      title: "Pattern Detection",
      items: [
        {
          label: "Pattern Analysis",
          value: "Analyzing sentiment patterns",
          color: "purple",
          animate: true,
        },
        {
          label: "Themes Discovered",
          value: "8 recurring themes found",
          color: "yellow",
        },
      ],
    },
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
    visual: {
      title: "Scale Dashboard",
      items: [
        {
          label: "Team Access",
          value: "15 team members onboarded",
          color: "orange",
        },
        {
          label: "Knowledge Shared",
          value: "47 insights shared this week",
          color: "green",
          animate: true,
        },
      ],
    },
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
    visual: {
      title: "Integration Hub",
      items: [
        {
          label: "Connected Tools",
          value: "Slack, Notion, Airtable synced",
          color: "red",
        },
        {
          label: "Data Flowing",
          value: "156 insights exported today",
          color: "blue",
          animate: true,
        },
      ],
    },
  },
];
