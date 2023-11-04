import { render, screen } from '@testing-library/react';
import PrintApp from './PrintApp';

test('renders learn react link', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<PrintApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
