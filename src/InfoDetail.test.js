import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import InfoDetail from './InfoDetail';
import {act} from "react-dom/test-utils";

const mockProps = {
    placeType: 'Restaurant',
    placeName: 'Test Restaurant',
    distance: 0.5,
    walkTime: 10,
    openState: true,
    openingHours: {
        weekday_text: [
            'Monday: 9:00 AM – 5:00 PM',
            'Tuesday: 9:00 AM – 5:00 PM',
            'Wednesday: 9:00 AM – 5:00 PM',
            'Thursday: 9:00 AM – 5:00 PM',
            'Friday: 9:00 AM – 5:00 PM',
            'Saturday: Closed',
            'Sunday: Closed'
        ]
    },
    extraInfo: {
        accessibility: true,
        admissionFee: 10
    }
};

describe('InfoDetail component', () => {
    it('renders the component with correct props', () => {
        const {queryByText} = render(<InfoDetail {...mockProps} />);
        expect(screen.getByText('Restaurant')).toBeInTheDocument();
        expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
        expect(screen.getByText('0.5 miles')).toBeInTheDocument();
        expect(screen.getByText('10 min')).toBeInTheDocument();
        expect(screen.getByText('Yes')).toBeInTheDocument();
        expect(screen.getByText('£10')).toBeInTheDocument();
        expect(screen.getByText('Open now')).toBeInTheDocument();
        expect(queryByText('Monday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Tuesday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Wednesday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Thursday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Friday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Saturday: Closed')).not.toBeInTheDocument();
        expect(queryByText('Sunday: Closed')).not.toBeInTheDocument();
    });

    it('toggles opening hours when clicked', async () => {
        const {queryByText} = render(<InfoDetail {...mockProps} />);
        expect(queryByText('Monday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Tuesday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Wednesday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Thursday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Friday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
        expect(queryByText('Saturday: Closed')).not.toBeInTheDocument();
        expect(queryByText('Sunday: Closed')).not.toBeInTheDocument();

        act(() => {
            screen.getByTestId('open-time').click();
        });

        await waitFor(() => {
            expect(queryByText('Monday: 9:00 AM – 5:00 PM')).toBeInTheDocument();
            expect(queryByText('Tuesday: 9:00 AM – 5:00 PM')).toBeInTheDocument();
            expect(queryByText('Wednesday: 9:00 AM – 5:00 PM')).toBeInTheDocument();
            expect(queryByText('Thursday: 9:00 AM – 5:00 PM')).toBeInTheDocument();
            expect(queryByText('Friday: 9:00 AM – 5:00 PM')).toBeInTheDocument();
            expect(queryByText('Saturday: Closed')).toBeInTheDocument();
            expect(queryByText('Sunday: Closed')).toBeInTheDocument();
        });

        act(() => {
            screen.getByTestId('open-time').click();
        });

        await waitFor(() => {
            expect(queryByText('Monday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
            expect(queryByText('Tuesday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
            expect(queryByText('Wednesday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
            expect(queryByText('Thursday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
            expect(queryByText('Friday: 9:00 AM – 5:00 PM')).not.toBeInTheDocument();
            expect(queryByText('Saturday: Closed')).not.toBeInTheDocument();
            expect(queryByText('Sunday: Closed')).not.toBeInTheDocument();
        });
    });
});