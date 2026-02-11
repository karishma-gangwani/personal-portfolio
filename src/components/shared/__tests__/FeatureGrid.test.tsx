import React from 'react';
import { render, screen } from '@testing-library/react';
import { FeatureGrid } from '../FeatureGrid';

const items = [
  { title: 'One', description: 'First' },
  { title: 'Two', description: 'Second' }
];

describe('FeatureGrid', () => {
  it('renders items', () => {
    render(<FeatureGrid items={items} />);
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});
