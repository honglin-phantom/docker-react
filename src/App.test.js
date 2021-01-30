import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// 2nd test case to test live to update services defined in yml file 
test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello React/i);
  expect(linkElement).toBeInTheDocument(); 
});