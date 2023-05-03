import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import List from './List';

describe('List component', () => {
    test('renders loading state', () => {
        render(<List position={{lat: 37.7749, lng: -122.4194}} isShow={true} />);
        const loadingElement = screen.getByText(/Loading/i);
        expect(loadingElement).toBeInTheDocument();
    });

    test('renders error state', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.reject(new Error('Network error'))
        );
        render(<List position={{lat: 37.7749, lng: -122.4194}} isShow={true} />);
        const errorElement = await screen.findByTestId('Error');
        expect(errorElement).toBeInTheDocument();
        global.fetch.mockRestore();
    });

    test('renders list of places', async () => {
        const mockData = [
            {
                name: 'Golden Gate Park',
                place_id: 'ChIJLwPMI7J9j4AR26fKmLzL7iM',
                rating: 4.7,
                photos: [{photo_reference: '12345'}],
                types: ['park']
            },
            {
                name: 'San Francisco Public Library',
                place_id: 'ChIJLwPMI7J9j4AR26fKmLzL7iL',
                rating: 4.5,
                photos: [{photo_reference: '67890'}],
                types: ['library']
            }
        ];
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData)
            })
        );
        const onLoaded = jest.fn();

        render(
            <MemoryRouter>
                <List position={{lat: 37.7749, lng: -122.4194}} isShow={true} onLoaded={onLoaded} />
            </MemoryRouter>
        );
        const placeElements = await screen.findAllByTestId('handleToDetail');
        expect(placeElements).toHaveLength(2);
        expect(placeElements[0]).toHaveTextContent('Golden Gate Park');
        expect(placeElements[1]).toHaveTextContent('San Francisco Public Library');
        expect(onLoaded).toHaveBeenCalledWith(mockData);
        global.fetch.mockRestore();
    });
});