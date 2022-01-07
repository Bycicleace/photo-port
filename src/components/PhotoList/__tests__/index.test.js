import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PhotoList from '..';

afterEach(cleanup);

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<PhotoList />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<PhotoList />);
        expect(asFragment()).toMatchSnapshot();
    })
});