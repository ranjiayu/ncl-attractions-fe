import { render } from '@testing-library/react';
import Star from './Star';

describe('Star', () => {
    it('renders nothing when rate is falsy', () => {
        const { container } = render(<Star rate={0} />);
        expect(container.firstChild).toBe(null);
    });

    it('renders correct number of filled and outline stars', () => {
        const rate = 3;
        const { getAllByTestId } = render(<Star rate={rate} />);
        const filledStars = getAllByTestId('FaStar');
        const outlineStars = getAllByTestId('FaRegStar');
        expect(filledStars.length).toBe(rate);
        expect(outlineStars.length).toBe(5 - rate);
    });
});
