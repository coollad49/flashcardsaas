import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import Feature from "./Feature";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for Everyone",
      description:
        "Designed for learners, educators, and professionals to boost productivity and retention.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "Intuitive interface that makes creating and studying flashcards effortless.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Affordable plans to fit every budget. No hidden fees or surprises.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "Reliable and always available when you need it.",
      icon: <IconCloud />,
    },
    {
      title: "AI-Powered",
      description: "Leverage the power of AI to create and organize flashcards efficiently.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Round-the-clock support to assist you whenever you need help.",
      icon: <IconHelp />,
    },
    {
      title: "More Features",
      description: "Discover a suite of features designed to enhance your learning experience.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}