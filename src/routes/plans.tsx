import { createFileRoute } from '@tanstack/react-router';
import { LibraryPage } from '@/components/portal-pages';
import { pageMeta } from '@/lib/portal';
export const Route = createFileRoute('/plans')({ head: () => pageMeta('The plans', 'The Ezeme family business plans, company records, governance documents and audits.'), component: () => <LibraryPage plansOnly /> });