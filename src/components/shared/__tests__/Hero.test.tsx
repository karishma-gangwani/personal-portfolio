import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero', () => {
  it('renders title and subtitle', () => {
    render(<Hero title="Test Title" subtitle="Test subtitle" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test subtitle')).toBeInTheDocument();
  });
});
