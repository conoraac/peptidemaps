export type Condition = {
  slug: string;
  name: string;
  blurb: string;
};

export const CONDITIONS: Condition[] = [
  {
    slug: "weight-loss",
    name: "Weight Loss & Metabolic Health",
    blurb:
      "GLP-1 peptides like semaglutide and tirzepatide are most commonly discussed for weight and metabolic goals.",
  },
  {
    slug: "recovery",
    name: "Recovery & Injury",
    blurb:
      "Peptides like BPC-157 are often discussed for recovery, joint, and tissue repair.",
  },
  {
    slug: "anti-aging",
    name: "Anti-Aging & Longevity",
    blurb:
      "Sermorelin and protocols involving NAD+ come up frequently in healthy-aging conversations.",
  },
  {
    slug: "sleep",
    name: "Sleep",
    blurb:
      "Patients discuss peptides for restorative sleep and recovery in conjunction with broader health protocols.",
  },
  {
    slug: "sexual-health",
    name: "Sexual Health",
    blurb:
      "Patients ask about peptides for libido, performance, and overall sexual wellness.",
  },
  {
    slug: "cognitive-function",
    name: "Cognitive Function",
    blurb:
      "Peptides discussed for focus, memory, and overall cognitive support.",
  },
  {
    slug: "gut-health",
    name: "Gut Health",
    blurb:
      "Peptides patients ask about for gut repair and digestive support.",
  },
  {
    slug: "hormone-optimization",
    name: "Hormone Optimization",
    blurb:
      "Peptides commonly discussed alongside hormone optimization protocols.",
  },
];

export function findCondition(slug: string) {
  return CONDITIONS.find((c) => c.slug === slug);
}
