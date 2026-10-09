import { createFileRoute } from '@tanstack/react-router';
import { DocumentPage } from '@/components/portal-pages';
import { pages, pageMeta } from '@/lib/portal';
export const Route = createFileRoute('/$')({
  head: ({ params }) => pageMeta(pages[params._splat ?? '']?.title ?? 'Family record', 'An original document from the private family archive of the House of Ezeme.'),
  component: RecordPage,
});
function RecordPage() { const { _splat } = Route.useParams(); return <DocumentPage path={_splat ?? ''} />; }