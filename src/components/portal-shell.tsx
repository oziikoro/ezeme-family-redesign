import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, LockKeyhole, Search, Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/ezeme-logo-black.svg.asset.json';
import { navigation, searchPages } from '@/lib/portal';

export function PortalShell({ children, active = '/' }: { children: ReactNode; active?: string }) {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => { if (search) input.current?.focus(); }, [search]);
  useEffect(() => {
    if (!search) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setSearch(false); };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = previous; };
  }, [search]);
  const results = searchPages(query).slice(0, 30);
  return <>
    <header className="frame masthead">
      <a href="/" aria-label="Ezeme home"><img className="brand-image" src={logo.url} width="170" height="51" alt="Ezeme" /></a>
      <nav className={`main-nav ${menu ? 'open' : ''}`} aria-label="Primary navigation">
        {navigation.map(item => <a key={item.href} href={item.href} className={active === item.href ? 'active' : ''} aria-current={active === item.href ? 'page' : undefined}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <span className="private-label"><LockKeyhole size={11} /> FAMILY PORTAL</span>
        <Button size="icon" variant="ghost" aria-label="Search the archive" title="Search the archive" onClick={() => setSearch(true)}><Search size={19} /></Button>
        <Button size="icon" variant="ghost" className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button>
      </div>
    </header>
    <main>{children}</main>
    <footer className="footer"><div className="frame">
      <div className="footer-top"><a href="/" aria-label="Ezeme home"><img src={logo.url} className="brand-image" width="170" height="51" alt="Ezeme" /></a><p className="footer-note">Held for the generation after.</p><span className="private-label"><LockKeyhole size={11} /> PRIVATE · NOT FOR PUBLICATION</span></div>
      <div className="footer-bottom"><span>© 2026 Ezeme. All rights reserved.</span><span>Nkpor, Idemili North, Anambra State, Nigeria.</span><span>The House of Ezeme</span></div>
    </div></footer>
    {search && <div className="search-overlay" onClick={() => setSearch(false)}><section role="dialog" aria-modal="true" aria-labelledby="search-title" className="search-dialog" onClick={e => e.stopPropagation()}>
      <div className="dialog-title"><h2 id="search-title">The family archive</h2><Button size="icon" variant="ghost" aria-label="Close search" onClick={() => setSearch(false)}><X /></Button></div>
      <label className="search-field"><Search size={18} /><input ref={input} value={query} onChange={e => setQuery(e.target.value)} placeholder="Search documents, ventures, and traditions…" aria-label="Search all documents" /></label>
      <div className="search-results">{results.map(([path, page]) => <a href={`/${path}`} key={path} className="document-row"><FileText size={17} /><div><div className="document-name">{page.title}</div><div className="document-type">{page.category.toUpperCase()}</div></div><ArrowUpRight size={16} /></a>)}{results.length === 0 && <p className="empty-state">No records match “{query}”.</p>}</div>
    </section></div>}
  </>;
}