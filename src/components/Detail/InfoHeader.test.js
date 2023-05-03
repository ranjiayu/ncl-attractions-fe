import React from 'react';
import {render, fireEvent, waitFor, queryAllByTestId} from '@testing-library/react';
import InfoHeader from './InfoHeader';

beforeAll(() => {
    Object.defineProperty(window.navigator, 'clipboard', {
        value: {
            writeText: jest.fn(),
        },
    });
});


describe('InfoHeader component', () => {
    it('should render the component without errors', () => {
        const { getByText } = render(<InfoHeader placeName="Test Place" />);
        expect(getByText('Test Place')).toBeInTheDocument();
    });

    it('should open and close the share box when the share button is clicked', async () => {
        const {getByTestId, queryByTestId} = render(<InfoHeader placeName="Test Place"/>);
        const shareBtn = getByTestId('share-btn');
        fireEvent.click(shareBtn);
        await waitFor(() => {
            expect(getByTestId('share-box')).toBeInTheDocument();
        });
        fireEvent.click(getByTestId('close-btn'));
        await waitFor(() => {
            expect(queryByTestId('share-box')).not.toBeInTheDocument();
        });
    });

    it('should copy the link to clipboard when the copy link button is clicked', async () => {
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const {getByTestId, queryByTestId} = render(<InfoHeader placeName="Test Place"/>);
        const shareBtn = getByTestId('share-btn');
        fireEvent.click(shareBtn);
        const copyLinkBtn = getByTestId('copy-link-btn');
        fireEvent.click(copyLinkBtn);
        expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith(window.location.href);
        expect(alertSpy).toHaveBeenCalledWith('Link copied!');
        await waitFor(() => {
            expect(queryByTestId('share-box')).not.toBeInTheDocument();
        });
        alertSpy.mockRestore();
    });

    it('should share the link to Twitter when the Twitter button is clicked', async () => {
        const openSpy = jest.spyOn(window, 'open').mockImplementation(() => {
        });
        const {getByTestId} = render(<InfoHeader placeName="Test Place"/>);
        const shareBtn = getByTestId('share-btn');
        fireEvent.click(shareBtn);
        const twitterBtn = getByTestId('twitter-btn');
        fireEvent.click(twitterBtn);
        expect(openSpy).toHaveBeenCalledWith(expect.stringContaining('https://twitter.com/intent/tweet?text='));
        openSpy.mockRestore();
    });

    it('should go back to previous page when the back button is clicked', () => {
        window.history.pushState({}, 'Test Page', '/test');
        const { getByTestId } = render(<InfoHeader placeName="Test Place" />);
        const backBtn = getByTestId('back-btn');
        fireEvent.click(backBtn);
        expect(window.location.pathname).toBe('/test');
    });
});