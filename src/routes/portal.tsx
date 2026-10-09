import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, ArrowDown, Landmark, Layers, BookOpen, LockKeyhole } from 'lucide-react';
import { PortalShell } from '@/components/portal-shell';
import { Button } from '@/components/ui/button';
import { libraryEntries, pageMeta } from '@/lib/portal';
import houseImage from '@/assets/house-vision.jpg';

export const Route = createFileRoute('/portal')({ head: () => pageMeta('The House of Ezeme', 'The family, its traditions, its ventures and its written record. The private portal of the House of Ezeme.'), component: Index });

const sections = [
  { number: '01', title: 'The House', text: 'Our identity, our traditions, and the institutions that hold the family together.', detail: '8 chapters of the archive', href: '/house', Icon: Landmark },
  { number: '02', title: 'The programme', text: 'The ventures we are building. From the workshop in Nkpor to the places that come next.', detail: '9 ventures', href: '/programme', Icon: Layers },
  { number: '03', title: 'The written record', text: 'The plans, source documents, and decisions. A shared memory for the generations ahead.', detail: 'Plans, documents & sources', href: '/library', Icon: BookOpen },
];
const reading = [
  { title: 'Family Business', subtitle: 'The mother company · The foundation', path: 'library/plans__00_Family_Business.html' },
  { title: 'The family knowledge base', subtitle: 'The House · Institutions · Membership', path: 'library/EZEME_FAMILY_KNOWLEDGE_BASE.html' },
  { title: 'Group operating architecture', subtitle: 'Governance · Ownership · Responsibility', path: 'library/EZEME_GROUP_OPERATING_ARCHITECTURE.html' },
];
function Index() {
  return <PortalShell active="/portal"><section className="hero">
    <img className="hero-image" src={houseImage} width={1536} height={1024} alt="An imagined modernist courtyard inspired by Igbo architecture" />
    <div className="frame hero-inner"><span className="eyebrow">The private family portal</span><h1>The House<br />of Ezeme.</h1><p className="hero-copy">A family. A shared purpose. A lasting legacy.<br />Our traditions, our work, and the record we<br className="hidden md:block" /> leave for those who come after us.</p><div className="hero-links"><Button asChild variant="hero"><a href="/house">Enter the House <ArrowUpRight /></a></Button><Button asChild variant="heroLink"><a href="/programme">Explore the programme <ArrowRight /></a></Button></div></div>
    <div className="frame hero-bottom"><span><LockKeyhole size={11} /> Private · For the family</span><span>Nkpor, Anambra · Nigeria</span><a href="#explore" aria-label="Explore the family portal"><ArrowDown size={17} /></a></div>
  </section>
  <div className="frame overview-strip"><div><p className="intro">One family.<br />A horizon beyond ourselves.</p></div><div><span className="stat-number">05</span><span className="stat-label">Children. Five distinct paths.</span></div><div><span className="stat-number">09</span><span className="stat-label">Ventures in the programme.</span></div><div><span className="stat-number">{libraryEntries.length}</span><span className="stat-label">Records in the plan library.</span></div></div>
  <section className="frame section" id="explore"><div className="section-heading"><div><span className="eyebrow">The family portal</span><h2>What we hold. What we build.</h2></div><p className="section-description">The personal archive, the work ahead, and the<br className="hidden md:block" /> thinking that connects them.</p></div><div className="portal-grid">{sections.map(item => <a className="portal-tile" href={item.href} key={item.number}><div className="tile-top"><span className="eyebrow">{item.number}</span><item.Icon size={25} strokeWidth={1.2} /></div><h3>{item.title}</h3><p>{item.text}</p><div className="tile-footer"><span>{item.detail}</span><ArrowUpRight size={18} /></div></a>)}</div></section>
  <section className="motto-band"><div className="frame"><span className="eyebrow">The words we live by</span><h2>Onye Ayana Nwanne.</h2><p>Let no one abandon their kin.</p></div></section>
  <section className="frame section reading-layout"><div><div className="section-heading"><div><span className="eyebrow">Begin with the foundation</span><h2>The essential reading.</h2></div></div><p className="section-description">The documents at the heart of the House.<br />Who we are, how we work, and what we hold.</p><Button asChild variant="link" className="mt-5 px-0 text-xs"><a href="/library">View the complete library <ArrowRight /></a></Button></div><div>{reading.map((item, i) => <a className="document-row" key={item.path} href={`/${item.path}`}><span className="document-number">0{i + 1}</span><div><p className="document-name">{item.title}</p><p className="document-type">{item.subtitle}</p></div><ArrowUpRight size={17} /></a>)}</div></section>
  </PortalShell>;
}
