import { render, screen } from '@testing-library/react';
import Button from '.';

test('renders button', () => {
  render(<Button size="small">테스트</Button>);
  const textElement = screen.getByText(/테스트/i);
  expect(textElement).toBeInTheDocument();
});
