import { createFileRoute } from '@tanstack/react-router';
import { LibraryPage } from '@/components/portal-pages';
import { pageMeta } from '@/lib/portal';
export const Route = createFileRoute('/library')({ head: () => pageMeta('The library', 'Search the full Ezeme collection of family plans, source documents and records.'), component: () => <LibraryPage /> });