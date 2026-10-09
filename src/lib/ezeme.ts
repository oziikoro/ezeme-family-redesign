export const navigation = [
  { label: 'Overview', to: '/' },
  { label: 'Family', to: '/family' },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Businesses', to: '/businesses' },
  { label: 'Record', to: '/record' },
] as const;

export const domains = [
  { title: 'Agriculture & Food Systems', partner: 'Manufacturing & Industrial Production', description: 'Seed, machinery, primary production in the Idemmili belt, storage and cold chain, processing at Nkpor, wholesale and ECOWAS export — and the factory layer behind it: blocks, roofing, steel fabrication, packaging, equipment.' },
  { title: 'Finance & Investment Systems', partner: 'Governance, Law & Security', description: 'The group’s own capital and its funds; management fees and carried interest; insurance and credit; treasury and banking relationships; securities dealing; title, legal practice and security for every operating company.' },
  { title: 'Education & Human Capital', partner: 'Healthcare & Pharmaceuticals', description: 'Schools, polytechnic and university — training every operator the group needs — alongside generics, sterile injectables and consumer health, with an accredited teaching hospital so the group can generate its own clinical evidence.' },
  { title: 'Media & Information Systems', partner: 'Transport & Logistics', description: 'Film, music, animation, broadcast, publishing and rights — a catalogue that earns long after it is made — and the freight, warehousing and fleet that move the group’s goods and everyone else’s.' },
  { title: 'Energy & Utilities', partner: 'Construction & Real Estate', description: 'Generation and distribution, solar and mini-grids, downstream fuel and gas; building and civil contracting, materials and quarry, the land bank and the housing and estate services above it.' },
];

export const businesses = [
  { name: 'Ozikoro', category: 'Culture & heritage', status: 'Building', url: 'https://ozikoro.com', description: 'A museum, art gallery and anthropological research hub being built in a converted warehouse in Awka. Until the building opens, it publishes Igbo and African history, town and clan histories, archive photographs and the work of African researchers.' },
  { name: 'Ozituma', category: 'African languages', status: 'Live', url: 'https://ozituma.com', description: 'A free dictionary of African languages. Words, meanings, pronunciations, names and dialect variants, recorded and defined.' },
  { name: 'OmaPolo', category: 'Clothing', status: 'Live', url: 'https://omapolo.com', description: 'A polo brand, sold online — the group’s first consumer goods business.' },
];

export const records = [
  { year: '2026', name: 'ezeme.org', text: 'Registered, and this site published on it.' },
  { year: '2025', name: 'Ozi Ikoro Limited', text: 'Incorporated 29 October 2025. RC 8955047.' },
  { year: '2025', name: 'Ozituma', text: 'Live at ozituma.com.' },
  { year: '2025', name: 'OmaPolo', text: 'Live at omapolo.com.' },
  { year: '2024', name: 'Ozikoro', text: 'Started August 2024. Live at ozikoro.com.' },
];

export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — Ezeme`;
  return { meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}