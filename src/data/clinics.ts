export type Clinic = {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  stateSlug: string;
  medicalDirector?: string;
  pharmacyPartner?: string;
  peptidesOffered: string[];
  status: "active" | "pending";
  rating?: number;
  reviewCount?: number;
  address?: string;
  verified?: boolean;
  website?: string;
  highlights?: string[];
};

export const CLINICS: Clinic[] = [
  {
    id: "1",
    name: "Gameday Men's Health Englewood",
    slug: "gameday-mens-health-englewood",
    city: "Englewood",
    state: "Colorado",
    stateSlug: "colorado",
    medicalDirector: "Dr. M. Reyes, MD",
    pharmacyPartner: "Empower Pharmacy",
    peptidesOffered: [
      "Testosterone (TRT)",
      "Tesamorelin",
      "BPC-157",
      "Sermorelin",
      "Ipamorelin",
    ],
    status: "active",
    rating: 5.0,
    reviewCount: 70,
    address: "750 W Hampden Ave, Suite 501, Englewood, CO 80110",
    verified: true,
    website: "https://gamedaymenshealth.com/englewood",
    highlights: [
      "Verified provider",
      "Accepting new patients",
      "In-person & telehealth",
      "Physician-supervised",
    ],
  },
  {
    id: "2",
    name: "Front Range Peptide Co.",
    slug: "front-range-peptide-co-denver",
    city: "Denver",
    state: "Colorado",
    stateSlug: "colorado",
    medicalDirector: "Dr. A. Hayes, DO",
    pharmacyPartner: "Tailor Made Compounding",
    peptidesOffered: ["Semaglutide", "Tirzepatide", "BPC-157", "Sermorelin"],
    status: "active",
    rating: 4.8,
    reviewCount: 24,
    address: "1450 Wewatta St, Denver, CO 80202",
    verified: true,
  },
  {
    id: "3",
    name: "Mile High Hormone & Performance",
    slug: "mile-high-hormone-performance-boulder",
    city: "Boulder",
    state: "Colorado",
    stateSlug: "colorado",
    medicalDirector: "Dr. K. Park, MD",
    peptidesOffered: ["Testosterone (TRT)", "Semaglutide", "Ipamorelin"],
    status: "active",
    rating: 4.7,
    reviewCount: 19,
    address: "2100 Pearl St, Boulder, CO 80302",
    verified: true,
  },
  {
    id: "4",
    name: "Aurora Vitality Clinic",
    slug: "aurora-vitality-clinic-aurora",
    city: "Aurora",
    state: "Colorado",
    stateSlug: "colorado",
    peptidesOffered: ["Semaglutide", "BPC-157"],
    status: "active",
    rating: 4.6,
    reviewCount: 12,
    address: "14001 E Iliff Ave, Aurora, CO 80014",
    verified: true,
  },
  {
    id: "5",
    name: "Lakeshore Men's Wellness",
    slug: "lakeshore-mens-wellness-chicago",
    city: "Chicago",
    state: "Illinois",
    stateSlug: "illinois",
    peptidesOffered: ["Testosterone (TRT)", "Sermorelin", "BPC-157"],
    status: "active",
    rating: 4.9,
    reviewCount: 33,
    address: "200 N Michigan Ave, Chicago, IL 60601",
    verified: true,
  },
  {
    id: "6",
    name: "Austin Peptide Therapy",
    slug: "austin-peptide-therapy-austin",
    city: "Austin",
    state: "Texas",
    stateSlug: "texas",
    peptidesOffered: ["Semaglutide", "Tirzepatide", "BPC-157", "Ipamorelin"],
    status: "active",
    rating: 4.8,
    reviewCount: 41,
    address: "98 San Jacinto Blvd, Austin, TX 78701",
    verified: true,
  },
];

export function clinicsByCity(city: string, stateSlug: string) {
  return CLINICS.filter(
    (c) =>
      c.city.toLowerCase() === city.toLowerCase() &&
      c.stateSlug === stateSlug &&
      c.status === "active"
  );
}

export function clinicsByState(stateSlug: string) {
  return CLINICS.filter((c) => c.stateSlug === stateSlug && c.status === "active");
}

export function clinicBySlug(slug: string) {
  return CLINICS.find((c) => c.slug === slug);
}

export function citiesWithClinicsByState(stateSlug: string) {
  const set = new Set<string>();
  for (const c of CLINICS) {
    if (c.stateSlug === stateSlug && c.status === "active") set.add(c.city);
  }
  return Array.from(set);
}
