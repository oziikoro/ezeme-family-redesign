import { createFileRoute } from '@tanstack/react-router';
import { SectionPage } from '@/components/portal-pages';
import { pageMeta } from '@/lib/portal';
export const Route = createFileRoute('/programme')({ head: () => pageMeta('The programme', 'The nine ventures in the Ezeme family programme, with original sources and requirements.'), component: () => <SectionPage section="programme" /> });