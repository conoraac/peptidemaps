export type Condition = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  peptides: string[];
};

export const CONDITIONS: Condition[] = [
  {
    slug: "weight-loss",
    name: "Weight Loss & Metabolic Health",
    short: "Weight loss",
    blurb:
      "GLP-1 peptides like semaglutide and tirzepatide are most commonly discussed for weight and metabolic goals.",
    peptides: ["Semaglutide", "Tirzepatide"],
  },
  {
    slug: "recovery",
    name: "Recovery & Injury",
    short: "Recovery",
    blurb:
      "Peptides like BPC-157 are often discussed for recovery, joint, and tissue repair.",
    peptides: ["BPC-157", "TB-500"],
  },
  {
    slug: "anti-aging",
    name: "Anti-Aging & Longevity",
    short: "Anti-aging",
    blurb:
      "Sermorelin and protocols involving NAD+ come up frequently in healthy-aging conversations.",
    peptides: ["Sermorelin", "NAD+"],
  },
  {
    slug: "sleep",
    name: "Sleep",
    short: "Sleep",
    blurb:
      "Patients discuss peptides for restorative sleep and recovery in conjunction with broader health protocols.",
    peptides: ["DSIP", "Epitalon"],
  },
  {
    slug: "sexual-health",
    name: "Sexual Health",
    short: "Sexual health",
    blurb:
      "Patients ask about peptides for libido, performance, and overall sexual wellness.",
    peptides: ["PT-141"],
  },
  {
    slug: "cognitive-function",
    name: "Cognitive Function",
    short: "Cognitive",
    blurb:
      "Peptides discussed for focus, memory, and overall cognitive support.",
    peptides: ["Selank", "Semax"],
  },
  {
    slug: "gut-health",
    name: "Gut Health",
    short: "Gut health",
    blurb:
      "Peptides patients ask about for gut repair and digestive support.",
    peptides: ["BPC-157", "KPV"],
  },
  {
    slug: "hormone-optimization",
    name: "Hormone Optimization",
    short: "Hormones",
    blurb:
      "Peptides commonly discussed alongside hormone optimization protocols.",
    peptides: ["Sermorelin", "Ipamorelin"],
  },
];

export function findCondition(slug: string) {
  return CONDITIONS.find((c) => c.slug === slug);
}
