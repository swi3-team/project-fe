import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../header';

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />);

    // Check if the text 'Cars admin' is present in the document
    expect(screen.getByText('Cars admin')).toBeInTheDocument();
  });

  // Add more tests if needed
});
