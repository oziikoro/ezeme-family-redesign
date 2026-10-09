import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X, ArrowRight } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/ezeme-logo-black.svg.asset.json';
import { navigation } from '@/lib/ezeme';

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="enterprise-site">
    <div className="identity-strip"><div className="site-wrap"><span>A NIGERIAN FAMILY ENTERPRISE</span><span>NKPOR, ANAMBRA STATE · EST. 2025</span></div></div>
    <header className="site-header"><div className="site-wrap header-inner">
      <Link to="/" aria-label="Ezeme home" className="logo-link"><img src={logo.url} alt="EZEME" width={300} height={90} /></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}>{item.label}</Link>)}</nav>
      <Button variant="editorial" asChild className="header-projects"><Link to="/projects">Our projects <ArrowUpRight /></Link></Button>
      <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
    </div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[...navigation, { label: 'Our projects', to: '/projects' as const }].map(item => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={16} /></Link>)}</nav>}</header>
    <main>{children}</main>
    <footer className="site-footer"><div className="site-wrap"><div className="footer-top"><div><p className="eyebrow">THE LONG VIEW</p><h2>Built to be held.<br /><em>Made to endure.</em></h2></div><Button variant="inverse" asChild><Link to="/sectors">Explore our domains <ArrowUpRight /></Link></Button></div><div className="footer-bottom"><div><p className="footer-name">EZEME</p><p>A Nigerian family enterprise.<br />Nkpor, Idemili North, Anambra State, Nigeria.</p></div><nav aria-label="Footer navigation">{navigation.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}<Link to="/projects">Projects</Link></nav><p className="copyright">© 2026 Ezeme<br />One ownership. Across generations.</p></div></div></footer>
  </div>;
}

export function TextLink({ to, children }: { to: typeof navigation[number]['to'] | '/projects'; children: ReactNode }) {
  return <Button variant="text" asChild><Link to={to}>{children}<ArrowRight size={17} /></Link></Button>;
}

export function PageIntro({ label, title, text }: { label: string; title: string; text: string }) {
  return <section className="page-intro"><div className="site-wrap"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="intro-text">{text}</p></div></section>;
}