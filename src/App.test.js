import { render, screen } from '@testing-library/react';
import App from './App';
1
test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Это тестовый проект/i);
  expect(linkElement).toBeInTheDocument();
});
