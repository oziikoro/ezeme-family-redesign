import { describe, expect, it } from 'vitest';
import { pages, searchPages } from '@/lib/portal';

describe('Imported family archive', () => {
  it('keeps the family business source document available at its original URL', () => {
    expect(pages['library/plans__00_Family_Business.html']?.words).toBeGreaterThan(4000);
  });
  it('finds the family business plan by its name', () => {
    expect(searchPages('Family Business', 'Library').map(([path]) => path)).toContain('library/plans__00_Family_Business.html');
  });
  it('keeps all nine programme records', () => {
    expect(Object.values(pages).filter(page => page.category === 'programme')).toHaveLength(9);
  });
});