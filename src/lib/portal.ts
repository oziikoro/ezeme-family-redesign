import rawPages from '@/data/portal-pages.json';

export type PortalPage = { title: string; html: string; excerpt: string; category: string; words: number };
export const pages: Record<string, PortalPage> = rawPages;
export const entries = Object.entries(pages);
export const libraryEntries = entries.filter(([path]) => path.startsWith('library/') && path !== 'library/index.html');
export const navigation = [
  { label: 'Overview', href: '/' },
  { label: 'The House', href: '/house' },
  { label: 'The five', href: '/the-five' },
  { label: 'Programme', href: '/programme' },
  { label: 'Plans', href: '/plans' },
  { label: 'Library', href: '/library' },
];
export function pageMeta(title: string, description: string) {
  return { meta: [
    { title: `${title} — Ezeme` }, { name: 'description', content: description },
    { property: 'og:title', content: `${title} — Ezeme` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'robots', content: 'noindex, nofollow' },
  ] };
}
export function searchPages(query: string, category = 'All') {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return entries.filter(([path, page]) => {
    if (path.endsWith('/index.html') || !path.includes('/')) return false;
    if (category !== 'All' && page.category !== category.toLowerCase()) return false;
    const text = `${page.title} ${path} ${page.excerpt}`.toLowerCase();
    return terms.every(term => text.includes(term));
  });
}