import { createFileRoute } from '@tanstack/react-router';
import { SectionPage } from '@/components/portal-pages';
import { pageMeta } from '@/lib/portal';
export const Route = createFileRoute('/house')({ head: () => pageMeta('The House', 'The family traditions, institutions, culture and personal archive of the House of Ezeme.'), component: () => <SectionPage section="house" /> });