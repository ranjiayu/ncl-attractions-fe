import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';
import Star from "./Star";

describe('Filter', () => {
    it('renders filter component', () => {
        render(<Filter isShow={true} />);

        expect(screen.getByText('Type of attractions')).toBeInTheDocument();
        expect(screen.getByText('History buildings')).toBeInTheDocument();
        expect(screen.getByText('Museums')).toBeInTheDocument();
        expect(screen.getByText('Libraries')).toBeInTheDocument();
        expect(screen.getByText('Parks')).toBeInTheDocument();
        expect(screen.getByText('Show results')).toBeInTheDocument();
        expect(screen.getAllByRole('button').length).toBe(5);
    });

    it('handleShowResult should call clickCallback with correct types', () => {
        const props = {
            isShow: true,
            clickCallback: jest.fn(),
            callback: jest.fn()
        };
        render(<Filter {...props} />);

        const allButtons = screen.getAllByRole('button');

        fireEvent.click(allButtons[0]);
        fireEvent.click(allButtons[1]);
        fireEvent.click(allButtons[3]);

        const showResultsButton = screen.getByRole('button', { name: /Show results/i });
        fireEvent.click(showResultsButton);

        expect(props.clickCallback).toHaveBeenCalledWith(['history_building', 'museum', 'park']);
    });
});
