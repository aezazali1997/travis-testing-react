import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('learning react testing ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning unit tests/i);
  expect(linkElement).toBeInTheDocument();
});