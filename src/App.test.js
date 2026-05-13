import { render, screen } from '@testing-library/react';
import App from './App';

test('renders The Healing Clinic homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Revolutionizing healthcare for the past 50 years/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^Treatments$/i })).toBeInTheDocument();
  expect(screen.getByText(/House No.- C-1000, Sector 43/i)).toBeInTheDocument();
});
