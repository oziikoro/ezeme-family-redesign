import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout, PageIntro } from '@/components/ezeme-layout';
import { pageHead } from '@/lib/ezeme';
import content from '@/lib/public-content.json';
import workshop from '@/assets/ezeme-workshop.jpg.asset.json';
export const Route = createFileRoute('/manufacturing')({ head: () => pageHead('Manufacturing', 'Ezeme Furniture & Soft Furnishings: the planned institutional manufacturing workshop in Nkpor.'), component: Manufacturing });
function Manufacturing() { return <SiteLayout><PageIntro label="MANUFACTURING · NKPOR · IN DEVELOPMENT" title="Furniture & Soft Furnishings." text="Furniture builds the frame. Soft furnishings finish it." /><div className="site-wrap"><figure className="manufacturing-visual"><img src={workshop.url} alt="Illustrative woodworking and solid timber chair study" width={1200} height={800} /><figcaption>Craftsmanship study · Illustrative imagery. The Ezeme workshop is not yet built.</figcaption></figure></div><div className="source-content" dangerouslySetInnerHTML={{ __html: content.manufacturing }} /></SiteLayout>; }