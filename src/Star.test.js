import { render, fireEvent } from '@testing-library/react';
import Star from './Star';

describe('Star component', () => {
    it('renders 5 stars', () => {
        const { queryAllByTestId} = render(<Star />);
        const FaStars = queryAllByTestId('FaStars');
        const FaRegStars = queryAllByTestId('FaRegStar');
        expect(FaStars.length).toBe(0);
        expect(FaRegStars.length).toBe(5);
    });

    it('changes rate when a star is clicked', () => {
        const onChangeMock = jest.fn();
        const { getAllByTestId } = render(<Star onChange={onChangeMock} />);
        const stars = getAllByTestId('FaRegStar');
        fireEvent.click(stars[2]);
        expect(onChangeMock).toHaveBeenCalledWith(3);
    });
});