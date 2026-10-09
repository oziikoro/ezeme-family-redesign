import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '@/components/ui/button';

describe('Button child composition', () => {
  it('renders a linked button and runs the child and wrapper click handlers', () => {
    const childClick = vi.fn((event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault());
    const buttonClick = vi.fn();
    render(<Button asChild onClick={buttonClick}><a href="/house" onClick={childClick}>Enter the House</a></Button>);
    const link = screen.getByRole('link', { name: 'Enter the House' });
    fireEvent.click(link);
    expect(childClick).toHaveBeenCalledOnce();
    expect(buttonClick).toHaveBeenCalledOnce();
  });
});