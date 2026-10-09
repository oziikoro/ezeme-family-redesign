import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { SiteLayout, TextLink } from '@/components/ezeme-layout';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/ezeme';

export const Route = createFileRoute('/family')({
  head: () => pageHead('The Ezeme family', 'The family behind Ezeme: one ownership, a shared responsibility and an institution held intact across generations. Family records remain private.'),
  component: Family,
});

function Family() {
  return <SiteLayout>
    <section className="family-hero section-dark"><div className="site-wrap">
      <p className="eyebrow">EZEME / THE FAMILY</p>
      <h1>The Ezeme family.<br /><em>Across generations.</em></h1>
      <p className="intro-text">Behind the enterprise is a family — and a commitment to leave the next generation something whole.</p>
    </div></section>
    <section className="section"><div className="site-wrap">
      <div className="section-heading"><div><p className="section-number">01 / A SHARED RESPONSIBILITY</p><p className="eyebrow">HELD INTACT. NOT SCATTERED.</p></div><h2>One ownership.<br /><em>A longer horizon.</em></h2></div>
      <div className="about-grid"><p className="eyebrow">THE FAMILY & THE ENTERPRISE</p><div className="about-text"><p>Ezeme is a Nigerian family enterprise rooted in Nkpor, Anambra State. The enterprise brings together operating businesses; the family holds the longer purpose.</p><p>The ambition is an institution durable enough that the generation after this one inherits something whole — not a collection of businesses scattered between generations.</p></div></div>
    </div></section>
    <section className="section section-dark"><div className="site-wrap">
      <div className="section-heading"><div><p className="section-number">02 / THE FAMILY SPACE</p><p className="eyebrow">A SEPARATE, PRIVATE RECORD</p></div><h2>Some things belong<br /><em>within the family.</em></h2></div>
      <div className="about-grid"><p className="eyebrow">FAMILY.EZEME.ORG</p><div><p>Family records and internal governance are separate from the public enterprise. Personal documents are not published here.</p><div className="family-paths"><div className="family-path"><div><h3>Family portal</h3><p>The family’s separate address.</p></div><Button variant="inverse" asChild><Link to="/portal">Enter family portal <ArrowUpRight /></Link></Button></div><div className="family-path"><div><h3>The enterprise</h3><p>The businesses, sectors and work that are public.</p></div><TextLink to="/">View the enterprise</TextLink></div></div></div></div>
    </div></section>
  </SiteLayout>;
}