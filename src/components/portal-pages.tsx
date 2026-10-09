import { useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronRight, FileText, Search, Landmark, Users, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PortalShell } from './portal-shell';
import { entries, pages, searchPages } from '@/lib/portal';

export function SectionPage({ section }: { section: 'house' | 'the-five' | 'programme' }) {
  const configs = {
    house: { title: 'The House of Ezeme', eyebrow: 'The personal archive', description: 'The family, its traditions, its offices, its watches and its records.', category: 'archive', Icon: Landmark },
    'the-five': { title: 'The five', eyebrow: 'Every year, every child', description: 'A company formed on the day each child is born, growing at the same rate they do.', category: 'dashboard', Icon: Users },
    programme: { title: 'The programme', eyebrow: 'What is actually being built', description: 'Nine ventures, their source documents, their requirements, and what remains to be resolved.', category: 'programme', Icon: Layers },
  };
  const config = configs[section];
  const items = entries.filter(([, p]) => p.category === config.category);
  return <PortalShell active={`/${section}`}><div className="frame"><PageHeading title={config.title} eyebrow={config.eyebrow} description={config.description} />
    {section === 'house' && <div className="motto-band"><span className="eyebrow">The family motto</span><h2>Onye Ayana Nwanne</h2><p>Let no one abandon their kin.</p></div>}
    <div className="library-grid">{items.map(([path, page], index) => <a href={`/${path}`} className="portal-tile" key={path}><div className="tile-top"><span className="eyebrow">{String(index + 1).padStart(2, '0')}</span><config.Icon size={21} strokeWidth={1.2} /></div><h3>{page.title.replace(/ — Ezeme$/, '')}</h3><p>{page.excerpt.slice(0, 155)}{page.excerpt.length > 155 ? '…' : ''}</p><div className="tile-footer"><span>Explore the record</span><ArrowUpRight size={18} /></div></a>)}</div>
    {section === 'the-five' && <div className="section"><div className="section-heading"><div><span className="eyebrow">The shared spine</span><h2>From the first day onward</h2></div><Button asChild variant="outline"><a href="/dashboard.html">The complete timeline <ArrowUpRight /></a></Button></div><div className="reader" dangerouslySetInnerHTML={{ __html: '<p>The business starts at birth, operates under professional management, and grows alongside the child. The complete source record includes education, languages, culture, governance and the transition to responsibility.</p>' }} /></div>}
  </div></PortalShell>;
}

export function PageHeading({ title, eyebrow, description }: { title: string; eyebrow: string; description: string }) {
  return <header className="page-heading"><div className="breadcrumb"><a href="/">Ezeme</a><ChevronRight size={12} /><span>{title}</span></div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="page-intro">{description}</p></header>;
}

export function LibraryPage({ plansOnly = false }: { plansOnly?: boolean }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(plansOnly ? 'Library' : 'All');
  const results = searchPages(query, category);
  return <PortalShell active={plansOnly ? '/plans' : '/library'}><div className="frame"><PageHeading title={plansOnly ? 'The plans' : 'The library'} eyebrow="The written record" description={plansOnly ? 'The family business, its five groups, the company plans, and the analysis behind them.' : 'The plans, source documents, roadmaps and records. Everything the family has written down, in one place.'} />
    <div className="library-toolbar"><div className="filter-group" aria-label="Document categories">{(plansOnly ? ['Library'] : ['All', 'Library', 'Documents', 'Sources']).map(label => <Button key={label} variant="filter" aria-pressed={category === label} onClick={() => setCategory(label)}>{label === 'Library' ? 'Plans & audits' : label}</Button>)}</div><label className="search-field"><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search the written record…" aria-label="Search library" /></label></div>
    <div className="flex justify-between pt-6 text-xs text-muted-foreground"><span>{results.length} records</span><span>From the family archive</span></div>
    <div className="library-grid">{results.map(([path, page]) => <a href={`/${path}`} key={path} className="library-item"><div className="tile-top"><span className="eyebrow">{page.category}</span><FileText size={17} strokeWidth={1.3} /></div><h2>{page.title.replace(/ — Ezeme$/, '')}</h2><div className="tile-footer"><span>{page.words.toLocaleString()} words</span><ArrowUpRight size={16} /></div></a>)}</div>{results.length === 0 && <p className="empty-state">No records match “{query}”.</p>}
  </div></PortalShell>;
}

export function DocumentPage({ path }: { path: string }) {
  const page = pages[path];
  if (!page) return <PortalShell><div className="frame section"><PageHeading title="Record not found" eyebrow="The archive" description="This record is not included in the uploaded archive." /><Button asChild variant="outline"><a href="/library">Back to the library <ArrowRight /></a></Button></div></PortalShell>;
  const active = page.category === 'archive' ? '/house' : page.category === 'dashboard' || path === 'dashboard.html' ? '/the-five' : page.category === 'programme' ? '/programme' : '/library';
  const siblings = entries.filter(([key, p]) => p.category === page.category && key !== path).slice(0, 8);
  return <PortalShell active={active}><div className="frame"><PageHeading title={page.title.replace(/ — Ezeme$/, '')} eyebrow={`${page.category === 'portal' ? 'Family' : page.category} · Original record`} description="The family’s source record, preserved in full." /><div className="reader-layout"><aside className="reader-aside"><span className="eyebrow">In the archive</span><a href={active}>← Back to {active === '/the-five' ? 'the five' : active.slice(1)}</a>{siblings.map(([key, item]) => <a key={key} href={`/${key}`}>{item.title}</a>)}</aside><article className="reader" dangerouslySetInnerHTML={{ __html: page.html }} /></div></div></PortalShell>;
}