export type DashboardChild = {
  name: string;
  ordinal: string;
  office: string;
  sectors: string;
  href: string;
};

export const dashboardStats = [
  { value: '5', label: 'Children', note: 'Isiome · Akunnia · Idenze · Uli · Okodu' },
  { value: 'Day one', label: 'Company formed', note: "Every child's business starts on the day they are born" },
  { value: '16', label: 'Full input from', note: 'The business runs with their advice and input' },
  { value: '25', label: 'Takeover', note: "On completion of the master's degree" },
];

export const dashboardChildren: DashboardChild[] = [
  { name: 'Isiome', ordinal: 'First Son', office: 'Patriarch of the House', sectors: 'Agriculture & Food Systems · Manufacturing & Industrial Production', href: '/dashboard/isiome.html' },
  { name: 'Akunnia', ordinal: 'First Daughter', office: 'Matriarch of the House · Chief Investment Officer', sectors: 'Finance & Investment Systems · Governance, Law & Security', href: '/dashboard/akunnia.html' },
  { name: 'Idenze', ordinal: 'Second Son', office: 'Senior Male Heir', sectors: 'Education & Human Capital · Healthcare & Pharmaceuticals', href: '/dashboard/idenze.html' },
  { name: 'Uli', ordinal: 'Second Daughter', office: 'Senior Female Heir', sectors: 'Media & Information Systems · Transport & Logistics', href: '/dashboard/uli.html' },
  { name: 'Okodu', ordinal: 'Third Son', office: 'Third Son', sectors: 'Energy & Utilities · Construction & Real Estate', href: '/dashboard/okodu.html' },
];

export const dashboardModel = [
  'Fully trained in every one of their industries from birth. Not introduced to a sector at eighteen — raised inside it.',
  'The domain is registered on the day of birth, and the business starts immediately — formed, or bought outright from an existing small business and brought into the group. It is a going concern before the child can speak.',
  'By ten they are already trading in their own market. The first daughter deals in the financial market before she is ten. Every child does the equivalent in theirs.',
  'The business runs with their advice and input, fully, from sixteen. Not consulted — deciding.',
  'It grows with them through higher education. The business is not paused while they study; they advise it from campus and work in it in the vacations.',
  "They take over when fully ready — and readiness is defined: the master's degree, completed.",
];

export const dashboardCaveat =
  'One thing this model does not do: it does not hold a title over the child. Ownership is held by the group, the business is run by a professional manager until the child is competent, and nothing about it is required of them. They may decline the whole of it without losing membership, affection or standing.';
