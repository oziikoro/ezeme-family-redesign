import { createFileRoute } from '@tanstack/react-router';
import { SectionPage } from '@/components/portal-pages';
import { pageMeta } from '@/lib/portal';
export const Route = createFileRoute('/the-five')({ head: () => pageMeta('The five', 'The five children, their industries and the education and business timeline of the House of Ezeme.'), component: () => <SectionPage section="the-five" /> });