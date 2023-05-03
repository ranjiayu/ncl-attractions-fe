import {render, screen, fireEvent, logDOM} from '@testing-library/react';
import PlaceItem from './PlaceItem';
import { MemoryRouter } from 'react-router-dom';
import config from "../../config";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
    mockedUsedNavigate.mockReset();
});

describe('PlaceItem component', () => {
    const item = {
        name: 'Test Place',
        type: 'history_building',
        rate: 4,
        reference: '123abc',
        placeID: '456def',
    };

    it('renders the component with the correct information', () => {
        const { container, getAllByTestId } = render(
            <PlaceItem item={item}/>
        );
        console.log(container.innerHTML);

        // Check the place name
        const placeName = screen.getByText('Test Place');
        expect(placeName).toBeInTheDocument();

        // Check the place type
        const placeType = screen.getByText('History Building');
        expect(placeType).toBeInTheDocument();

        // Check the star rating
        const filledStars = getAllByTestId('FaStar');
        const outlineStars = getAllByTestId('FaRegStar');
        expect(filledStars.length).toBe(item.rate);
        expect(outlineStars.length).toBe(5 - item.rate);

        // Check the image
        const placeImg = screen.getByAltText('Test Place');
        expect(placeImg).toBeInTheDocument();
        expect(placeImg).toHaveAttribute('src', `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=123abc&key=${config['MAP_API_KEY']}`);
    });

    it('navigates to the detail page when clicked', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <PlaceItem item={item}/>
            </MemoryRouter>
        );
        const placeItem = getByTestId("handleToDetail");
        fireEvent.click(placeItem)
        expect(mockedUsedNavigate).toHaveBeenCalledWith(`/place/${item.placeID}`);
    });
});
