import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InfoPic from './infoPic';
import config from "../../config";

const mockPhotos = [
    { photo_reference: '123' },
    { photo_reference: '456' },
    { photo_reference: '789' }
];

describe('InfoPic component', () => {
    it('renders without crashing', () => {
        render(<InfoPic photos={mockPhotos} />);
    });

    it('displays the first image by default', () => {
        const { getByAltText } = render(<InfoPic photos={mockPhotos} />);
        const firstImage = getByAltText('');
        expect(firstImage).toBeInTheDocument();
        expect(firstImage.src).toBe(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${mockPhotos[0].photo_reference}&key=${config['MAP_API_KEY']}`);
    });

    it('displays the correct image when clicking the next button', () => {
        const { getByAltText, getByTestId } = render(<InfoPic photos={mockPhotos} />);
        const nextButton = getByTestId('next-button');
        fireEvent.click(nextButton);
        const secondImage = getByAltText('');
        expect(secondImage).toBeInTheDocument();
        expect(secondImage.src).toBe(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${mockPhotos[1].photo_reference}&key=${config['MAP_API_KEY']}`);
    });

    it('displays the correct image when clicking the previous button', () => {
        const { getByAltText, getByTestId } = render(<InfoPic photos={mockPhotos} />);
        const prevButton = getByTestId('prev-button');
        fireEvent.click(prevButton);
        const lastImage = getByAltText('');
        expect(lastImage).toBeInTheDocument();
        expect(lastImage.src).toBe(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${mockPhotos[mockPhotos.length - 1].photo_reference}&key=${config['MAP_API_KEY']}`);
    });
});