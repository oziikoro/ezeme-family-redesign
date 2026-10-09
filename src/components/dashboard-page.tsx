import { ArrowUpRight } from 'lucide-react';
import { PortalShell } from './portal-shell';
import { PageHeading } from './portal-pages';
import { pages } from '@/lib/portal';
import { dashboardChildren, dashboardCaveat, dashboardModel, dashboardStats } from '@/lib/dashboard';

function timelineHtml() {
  const html = pages['dashboard.html']?.html ?? '';
  const heading = html.indexOf('The year-by-year');
  const marker = heading >= 0 ? html.lastIndexOf('<section>', heading) : -1;
  const slice = marker >= 0 ? html.slice(marker) : html;
  return slice.replace(/<h2>The year-by-year<\/h2>\s*<p>[^<]*<\/p>/, '');
}

export function DashboardPage() {
  return (
    <PortalShell active="/the-five">
      <div className="frame">
        <PageHeading
          title="Dashboard"
          eyebrow="The House"
          description="A company formed on the day each child is born, growing at the same rate they do."
        />

        <div className="dash-stats">
          {dashboardStats.map((stat) => (
            <div key={stat.label} className="dash-stat">
              <span className="eyebrow">{stat.label}</span>
              <strong>{stat.value}</strong>
              <p>{stat.note}</p>
            </div>
          ))}
        </div>

        <section className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The five</span>
              <h2>Their tracks</h2>
            </div>
          </div>
          <div className="dash-cards">
            {dashboardChildren.map((child) => (
              <a key={child.name} href={child.href} className="dash-card">
                <div className="tile-top">
                  <span className="eyebrow">{child.ordinal}</span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{child.name}</h3>
                <p className="dash-sectors">{child.sectors}</p>
                <dl>
                  <div>
                    <dt>House office</dt>
                    <dd>{child.office}</dd>
                  </div>
                  <div>
                    <dt>Takes over at</dt>
                    <dd>25</dd>
                  </div>
                </dl>
              </a>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The model</span>
              <h2>How it works</h2>
            </div>
          </div>
          <div className="model-grid">
            {dashboardModel.map((point, index) => (
              <div key={index} className="model-point">
                <span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
          <p className="dash-caveat">{dashboardCaveat}</p>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The year-by-year</span>
              <h2>Birth to fifty-five</h2>
            </div>
            <p className="dash-timeline-note">Nigerian school timing · binding, stated and proposed</p>
          </div>
          <div className="reader" dangerouslySetInnerHTML={{ __html: timelineHtml() }} />
        </section>
      </div>
    </PortalShell>
  );
}
